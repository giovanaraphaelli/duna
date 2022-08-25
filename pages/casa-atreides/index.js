import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Atreides.module.css';
import { characters } from '../../data/atreides.json';

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
            Segundo a lenda, a Casa Atreides veio de uma família nobre que se
            originou na Grécia na Terra e que ganharam destaque no Jihad
            Butleriano. A Casa Atreides afirmava ser descendente do rei
            Agamenon, filho de Atreus, segundo a mitologia grega. Os
            descendentes de Atreus eram chamados de "Atreides" (plural
            "Atreidai", latinizado como "Atreidae") na língua grega. Esta Casa
            Real incluía muitas figuras significativas no mito grego.
          </p>
        </section>
        <section className={styles.cardContainer}>
          <h2>Personagens</h2>
          {characters.map(
            ({ slug, name, homePlanet, birthDate, photoPath, genre }) => (
              <div key={slug} className={styles.card}>
                <figure>
                  <Image
                    src={photoPath}
                    alt=""
                    width={200}
                    height={200}
                    objectFit="cover"
                  />
                </figure>
                <div className={styles.cardContent}>
                  <h3>{name}</h3>
                  <p>
                    <strong>Planeta Natal: </strong>
                    {homePlanet}
                  </p>
                  <p>
                    <strong>Data de nascimento: </strong>
                    {birthDate}
                  </p>
                  <p>
                    <strong>Gênero: </strong>
                    {genre}
                  </p>
                </div>
                <Link href={`/casa-atreides/personagens/${slug}`}>
                  <a className="btn">Saiba Mais</a>
                </Link>
              </div>
            )
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
