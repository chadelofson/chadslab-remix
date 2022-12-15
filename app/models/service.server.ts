import type { Service } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Service } from "@prisma/client";

export async function getServiceListItems() {
  return prisma.service.findMany({
    select: { slug: true, title: true },
  });
}
