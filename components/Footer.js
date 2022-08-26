import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Desenvolvido por{' '}
        <a
          href="https://giovanaraphaelli.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          @girapha
        </a>
      </p>
    </footer>
  );
};

export default Footer;
