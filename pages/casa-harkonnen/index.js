import Head from 'next/head';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CasaPages from '../../components/CasaPages';
import characters from '../../data/characters.json';

export default function CasaHarkonnen() {
  return (
    <div>
      <Head>
        <title>Duna - Casa Harkonnen</title>
        <meta
          name="description"
          content="Página sobre a Casa Harkonnen de Duna"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#c54c07" />
      </Head>
      <Navbar />
      <CasaPages
        title="CASA HARKONNEN"
        data={characters.harkonnen}
        href="/casa-harkonnen/personagens/"
      >
        <p>
          A Casa Harkonnen era uma das Casas Maiores durante a época dos
          Imperadores Padixá. Tinha como capital Gieidi Primo, um planeta
          fortemente industrializado e com baixo potencial fotossintético.
        </p>
        <p>
          Era conhecida principalmente por suas táticas políticas dissimuladas e
          sinistras e por uma antiga rivalidade com a Casa Atreides. Os
          governantes da Casa Harkonnen recebiam o título de Barão-siridar.
        </p>
      </CasaPages>

      <Footer />
    </div>
  );
}
