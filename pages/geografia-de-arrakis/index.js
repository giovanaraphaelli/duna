import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Geografia from '../../components/Geografia';

const GeografiaDeArrakis = () => {
  return (
    <>
      <Head>
        <title>Duna - Geografia de Arrakis</title>
        <meta name="description" content="Conheça a geografia de Arrakis" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#c54c07" />
      </Head>
      <Navbar />
      <Geografia />

      <Footer />
    </>
  );
};

export default GeografiaDeArrakis;
