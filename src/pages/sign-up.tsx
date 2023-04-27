import Image from 'next/image';
import Link from 'next/link';
import { routePath } from '~/data/route-path';
import { AuthBackground, FormContainer } from '~/features/auth-page';
import styles from '~/styles/AuthPage.module.scss';

import {
  Anchor,
  Button,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

export default function SignUpPage() {
  return (
    <Flex h="100vh">
      <Link href={routePath.HOME}>
        <a className={styles['auth-logo']}>
          <Image src="/assets/cvmkr-black.svg" width={105} height={19} />
        </a>
      </Link>
      <FormContainer>
        <Stack>
          <Stack spacing={0}>
            <Title>Create account</Title>
            <Text color="dimmed">Get started now for free</Text>
          </Stack>
          <Button
            leftIcon={<Image src="/assets/google.svg" width={16} height={16} />}
            variant="default"
          >
            Sign up with Google
          </Button>
        </Stack>
        <Divider
          my={32}
          label={<Text color="dimmed">or</Text>}
          labelPosition="center"
        />
        <Stack>
          <TextInput
            placeholder="Enter your email"
            label="Email"
            withAsterisk
          />
          <TextInput
            placeholder="Create a password"
            label="Password"
            type="password"
            withAsterisk
            description="Must be at least 8 characters."
          />
          <TextInput
            placeholder="Confirm password"
            label="Confirm password"
            type="password"
            withAsterisk
          />
          <Stack mt="md" spacing={32}>
            <Button>Sign up</Button>
            <Text color="dimmed">
              Already have an account?
              <Link href={routePath.SIGN_IN} passHref>
                <Anchor> Log in</Anchor>
              </Link>
            </Text>
          </Stack>
        </Stack>
      </FormContainer>
      <AuthBackground />
    </Flex>
  );
}
