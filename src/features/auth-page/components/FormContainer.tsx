import styles from '~/styles/AuthPage.module.scss';

import { Center, Container, Stack } from '@mantine/core';

interface Props {
  children: React.ReactNode;
}

export default function FormContainer(props: Props) {
  return (
    <Container className={styles['form-container']}>
      <Center h="100vh">
        <Stack spacing={0}>{props.children}</Stack>
      </Center>
    </Container>
  );
}
