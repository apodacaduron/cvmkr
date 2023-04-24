import Image from 'next/image';
import Link from 'next/link';
import { routePath } from '~/data/route-path';
import styles from '~/styles/HomePage.module.scss';

export default function Nav() {
  return (
    <nav className={styles['nav']}>
      <Link href={routePath.HOME}>
        <a>
          <Image
            className={styles['nav__logo']}
            src="/assets/cvmkr-black.svg"
            width={105}
            height={19}
          />
        </a>
      </Link>
    </nav>
  );
}
