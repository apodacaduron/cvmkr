import { getSession } from "next-auth/react";
import Link from "next/link";
import { routePath } from "~/data/route-path";
import { Nav } from "~/features/designs-page";

import {
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Space,
  Title,
} from "@mantine/core";

import type { CtxOrReq } from "next-auth/client/_utils";
export default function DesignsPage() {
  return (
    <>
      <Nav />
      <Space h="64px" />
      <Container px="lg" size="xl">
        <Group position="apart">
          <Title>Designs</Title>
          <Link href={routePath.NEW_DESIGN}>
            <Button>Add design</Button>
          </Link>
        </Group>
        <Space h="32px" />
        <Grid gutter="lg">
          <Grid.Col sm={6} lg={3}>
            <Card padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  height={200}
                  alt="Norway"
                />
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
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
