import React from 'react';
import styles from '../styles/CasaPages.module.css';
import Cards from '../components/Cards';

const CasaPages = (props) => {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <h1>{props.title}</h1>
        {props.children}
      </section>
      <section className={styles.cardContainer}>
        <h2>Personagens</h2>
        <Cards data={props.data} href={props.href} />
      </section>
    </main>
  );
};

export default CasaPages;
