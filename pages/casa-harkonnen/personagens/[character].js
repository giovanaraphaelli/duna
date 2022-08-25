import Head from 'next/head';
import Image from 'next/image';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import styles from '../../../styles/CharacterPage.module.css';
import { harkonnen } from '../../../data/characters.json';

export default function CasaHarkonnen({ character }) {
  const personagem = harkonnen.find(
    (harkonnen) => harkonnen.slug === character
  );
  return (
    <div>
      <Head>
        <title>Duna - Casa Harkonnen</title>
        <meta name="description" content="Página sobre Duna" />
        <link rel="icon" href="/favicon.ico" />
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
    paths: harkonnen.map(({ slug }) => `/casa-harkonnen/personagens/${slug}`),
    fallback: false,
  };
}
