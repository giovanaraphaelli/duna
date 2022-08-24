import Head from 'next/head';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function CasaAtreides() {
  return (
    <div>
      <Head>
        <title>Duna - Casa Atreides</title>
        <meta name="description" content="Página sobre Duna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </div>
  );
}
