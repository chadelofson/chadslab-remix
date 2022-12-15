import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "rachel@remix.run";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("racheliscool", 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: "My first note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: "My second note",
      body: "Hello, world!",
      userId: user.id,
    },
  });

  const managedServiceDescription = `
    Have piece of mind without having to worry about your IT infrastructure
  `;

  const webDevDescription = `
  If you need a website up, look no further
  `;

  const internetDescription = `
    If you need someone to overlook your last-mile internet services look no further.
  `;

  await prisma.service.create({
    data: {
      slug: "managed-services",
      title: "Managed Services",
      content: managedServiceDescription,
      authorId: user.id,
    },
  });

  await prisma.service.create({
    data: {
      slug: "web-development",
      title: "Web Development",
      content: webDevDescription,
      authorId: user.id,
    },
  });

  await prisma.service.create({
    data: {
      slug: "internet-services",
      title: "Internet Services",
      content: internetDescription,
      authorId: user.id,
    },
  });
  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
