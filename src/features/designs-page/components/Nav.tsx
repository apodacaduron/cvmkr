import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { routePath } from "~/data/route-path";
import styles from "~/styles/DesignsPage.module.scss";

import {
  ActionIcon,
  Avatar,
  Container,
  createStyles,
  Group,
  Menu,
  NavLink,
  UnstyledButton,
} from "@mantine/core";
import { IconArrowLeft, IconChevronDown } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
  },
}));

interface Props {
  backUrl?: string;
}

export default function Nav(props: Props) {
  const { classes } = useStyles();
  const session = useSession();
  const router = useRouter();

  return (
    <nav className={styles["nav"]}>
      <Container size={props.backUrl ? "100%" : "xl"} w="100%">
        <Group w="100%" position="apart">
          <Group sx={{ alignItems: "center" }}>
            {props.backUrl && (
              <Link href={props.backUrl}>
                <ActionIcon variant="transparent">
                  <IconArrowLeft size="2rem" color="black" />
                </ActionIcon>
              </Link>
            )}
            <Link href={routePath.HOME}>
              <Image
                className={styles["nav__logo"]}
                src="/assets/cvmkr-black.svg"
                width={105}
                height={19}
                alt="logo"
              />
            </Link>
            {!props.backUrl && (
              <Group>
                <NavLink
                  label="Designs"
                  active={router.pathname === routePath.DESIGNS}
                  sx={{ borderRadius: "8px" }}
                />
              </Group>
            )}
          </Group>
          <Menu shadow="md" width={200} position="bottom-end">
            <Menu.Target>
              <UnstyledButton className={classes.user}>
                <Group spacing="xs">
                  <Avatar
                    src={session.data?.user.image}
                    radius="xl"
                    imageProps={{
                      referrerPolicy: "no-referrer",
                    }}
                  />
                  <IconChevronDown size="1rem" />
                </Group>
              </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item onClick={() => signOut()} color="red">
                Sign out
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </nav>
  );
}
