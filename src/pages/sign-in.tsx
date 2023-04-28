import Image from 'next/image';
import Link from 'next/link';
import { routePath } from '~/data/route-path';
import { AuthBackground, FormContainer } from '~/features/auth-page';
import styles from '~/styles/AuthPage.module.scss';

import { Anchor, Button, Divider, Flex, Group, Stack, Text, TextInput, Title } from '@mantine/core';

export default function SignInPage() {
  return (
    <Flex h="100vh">
      <Link href={routePath.HOME} className={styles["auth-logo"]}>
        <Image
          src="/assets/cvmkr-black.svg"
          width={105}
          height={19}
          alt="logo"
        />
      </Link>
      <FormContainer>
        <Stack>
          <Stack spacing={0}>
            <Title>Welcome back</Title>
            <Text color="dimmed">Welcome back please enter your details</Text>
          </Stack>
          <Button
            leftIcon={
              <Image
                src="/assets/google.svg"
                width={16}
                height={16}
                alt="google logo"
              />
            }
            variant="default"
          >
            Log in with Google
          </Button>
        </Stack>
        <Divider
          my={32}
          label={<Text color="dimmed">or</Text>}
          labelPosition="center"
        />
        <Stack>
          <TextInput placeholder="Enter your email" label="Email" />
          <Stack spacing={8}>
            <TextInput
              placeholder="Enter your password"
              label="Password"
              type="password"
            />
            <Group position="right">
              <Link href={routePath.FORGOT_PASSWORD}>Forgot password</Link>
            </Group>
          </Stack>
          <Stack spacing={32}>
            <Button>Log in</Button>
            <Text color="dimmed">
              Don't have an account?
              <Link href={routePath.SIGN_UP}> Sign up for free</Link>
            </Text>
          </Stack>
        </Stack>
      </FormContainer>
      <AuthBackground />
    </Flex>
  );
}
