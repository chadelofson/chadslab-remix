import { Outlet } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function IndexRoute() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}
