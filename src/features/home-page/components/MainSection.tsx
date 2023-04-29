import Image from 'next/image';
import styles from '~/styles/HomePage.module.scss';

import { Button } from '@mantine/core';

export default function MainSection() {
  return (
    <section className={styles["main-section"]}>
      <div className={styles["main-section__content"]}>
        <div>
          <h1 className={styles["main-section__content__title"]}>
            Choose a template. <br /> Fill the blanks. That’s it.
          </h1>
          <p className={styles["main-section__content__subtitle"]}>
            With our tool you can create and edit your CV’s fast and easy.
          </p>
          <Button>Get started</Button>
        </div>
        <Image
          className={styles["main-section__content__image"]}
          src="/assets/cv.png"
          width={1968}
          height={994}
          alt="sample cv"
        />
      </div>
    </section>
  );
}
