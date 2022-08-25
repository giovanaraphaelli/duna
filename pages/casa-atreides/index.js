import Head from 'next/head';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CasaPages from '../../components/CasaPages';
import characters from '../../data/characters.json';

export default function CasaAtreides() {
  return (
    <div>
      <Head>
        <title>Duna - Casa Atreides</title>
        <meta name="description" content="Página sobre Duna" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#c54c07" />
      </Head>
      <Navbar />
      <CasaPages
        title="CASA ATREIDES"
        data={characters.atreides}
        href="/casa-atreides/personagens/"
      >
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
      </CasaPages>

      <Footer />
    </div>
  );
}
