import Head from 'next/head';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/CasaPages.module.css';
import Cards from '../../components/Cards';
import characters from '../../data/characters.json';

export default function CasaAtreides() {
  return (
    <div>
      <Head>
        <title>Duna - Casa Atreides</title>
        <meta name="description" content="Página sobre Duna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.content}>
          <h1>CASA ATREIDES</h1>
          <p>
            Os Atreides governaram o exuberante planeta oceânico chamado Caladan
            com justiça e honra por gerações, sendo uma das Casas Principais do
            Império, e seus membros desempenham um papel importante em todos os
            livros da saga.
          </p>
          <p>
            A família Atreides afirma ter origens antigas, que remontam à
            mitologia grega. Na verdade, o próprio nome de Atreides refere-se a
            Atreus, o pai de Agamenon.
          </p>
        </section>
        <section className={styles.cardContainer}>
          <h2>Personagens</h2>
          <Cards data={characters.atreides} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
