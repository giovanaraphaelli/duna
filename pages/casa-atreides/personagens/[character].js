import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import styles from '../../../styles/CharacterPage.module.css';
import { atreides } from '../../../data/characters.json';

export default function CasaAtreides({ character }) {
  const personagem = atreides.find((atreides) => atreides.slug === character);
  return (
    <div>
      <Head>
        <title>Duna - {personagem.name}</title>
        <meta
          name="description"
          content="Página sobre a Casa Atreides de Duna"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#c54c07" />
      </Head>
      <Navbar />

      <main className={styles.container}>
        <div className={styles.containerImg}>
          <figure>
            <Image
              src={personagem.photoPath}
              alt=""
              width={400}
              height={400}
              objectFit="cover"
            />
          </figure>
        </div>
        <div className={styles.content}>
          <Link href="/casa-atreides">
            <a className={styles.link}>Casa Atreides</a>
          </Link>
          <h1>{personagem.name}</h1>
          <p>{personagem.about}</p>
          <p>
            <strong>Planeta Natal: </strong>
            {personagem.homePlanet}
          </p>
          <p>
            <strong>Data de nascimento: </strong>
            {personagem.birthDate}
          </p>
          <p>
            <strong>Gênero: </strong>
            {personagem.genre}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ params }) {
  return { props: { ...params } };
}

export async function getStaticPaths() {
  return {
    paths: atreides.map(({ slug }) => `/casa-atreides/personagens/${slug}`),
    fallback: false,
  };
}
