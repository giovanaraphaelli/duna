import Head from 'next/head';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/CasaPages.module.css';
import Cards from '../../components/Cards';
import characters from '../../data/characters.json';

export default function CasaHarkonnen() {
  return (
    <div>
      <Head>
        <title>Duna - Casa HARKONNEN</title>
        <meta name="description" content="Página sobre Duna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.content}>
          <h1>CASA HARKONNEN</h1>
          <p>
            A Casa Harkonnen era uma das Casas Maiores durante a época dos
            Imperadores Padixá. Tinha como capital Gieidi Primo, um planeta
            fortemente industrializado e com baixo potencial fotossintético.
          </p>
          <p>
            Era conhecida principalmente por suas táticas políticas dissimuladas
            e sinistras e por uma antiga rivalidade com a Casa Atreides. Os
            governantes da Casa Harkonnen recebiam o título de Barão-siridar.
          </p>
        </section>
        <section className={styles.cardContainer}>
          <h2>Personagens</h2>
          <Cards data={characters.harkonnen} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
