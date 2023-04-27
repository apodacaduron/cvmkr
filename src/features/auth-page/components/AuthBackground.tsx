import styles from '~/styles/AuthPage.module.scss';

import { BackgroundImage } from '@mantine/core';

export default function AuthBackground() {
  const backgrounImageUrl =
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

  return (
    <BackgroundImage
      className={styles['auth-background']}
      radius="lg"
      m="lg"
      src={backgrounImageUrl}
    />
  );
}
