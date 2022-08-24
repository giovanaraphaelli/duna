import Head from 'next/head';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function CasaHarkonnen() {
  return (
    <div>
      <Head>
        <title>Duna - Casa Harkonnen</title>
        <meta name="description" content="Página sobre Duna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </div>
  );
}
