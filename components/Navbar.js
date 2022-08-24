import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>Duna</a>
      </Link>
      <ul>
        <li>
          <Link href="/casa-atreides">
            <a>Casa Atreides</a>
          </Link>
        </li>
        <li>
          <Link href="/casa-harkonnen">
            <a>Casa Harkonnen</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
