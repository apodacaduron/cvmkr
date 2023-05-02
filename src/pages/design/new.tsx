import { getSession } from "next-auth/react";
import { routePath } from "~/data/route-path";
import { Nav } from "~/features/designs-page";

import type { CtxOrReq } from "next-auth/client/_utils";
export default function NewDesignPage() {
  return (
    <>
      <Nav backUrl={routePath.DESIGNS} />
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
