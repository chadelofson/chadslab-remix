import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
  return json({});
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  return redirect(``);
}

export default function AdminServiceDetailRoute() {
  const data = useLoaderData<typeof loader>();
  const actionDate = useActionData<typeof action>();
  return (
    <div>
      <h1>Service Detail</h1>
    </div>
  );
}
