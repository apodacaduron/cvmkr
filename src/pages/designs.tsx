import type { CtxOrReq } from "next-auth/client/_utils";
import { getSession } from "next-auth/react";
import { routePath } from "~/data/route-path";
import { Nav } from "~/features/designs-page";

export default function DesignsPage() {
  return (
    <>
      <Nav />
    </>
  );
}

export async function getServerSideProps(context: CtxOrReq) {
  const { req } = context;
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: { destination: routePath.SIGN_IN },
    };
  }

  return {
    props: {},
  };
}
