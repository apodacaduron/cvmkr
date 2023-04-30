import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { routePath } from "~/data/route-path";
import styles from "~/styles/DesignsPage.module.scss";

import {
  Avatar,
  createStyles,
  Group,
  Menu,
  NavLink,
  UnstyledButton,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
  },
}));

export default function Nav() {
  const { classes } = useStyles();
  const session = useSession();
  const router = useRouter();

  return (
    <nav className={styles["nav"]}>
      <Group w="100%" position="apart">
        <Group sx={{ alignItems: "center" }}>
          <Link href={routePath.HOME}>
            <Image
              className={styles["nav__logo"]}
              src="/assets/cvmkr-black.svg"
              width={105}
              height={19}
              alt="logo"
            />
          </Link>
          <Group>
            <NavLink
              label="Designs"
              active={router.pathname === routePath.DESIGNS}
            />
          </Group>
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
    </nav>
  );
}
