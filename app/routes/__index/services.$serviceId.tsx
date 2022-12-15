import { json, LoaderArgs } from "@remix-run/node";
export async function loader({ request }: LoaderArgs) {
  return json({});
}

export default function ServiceDetailPublicRoute() {
  return (
    <div>
      <h1>Service Detail Page!</h1>
    </div>
  );
}
