import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
export async function loader({ request }: LoaderArgs) {
  return json({});
}

export default function BlogPublicRoute() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Blog List</h1>
    </div>
  );
}
