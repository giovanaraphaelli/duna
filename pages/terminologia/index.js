import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Terms from '../../components/Terms';

const Terminologia = () => {
  return (
    <>
      <Head>
        <title>Duna - Terminologia</title>
        <meta
          name="description"
          content="Conheça alguns termos do universo de Duna"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#c54c07" />
      </Head>
      <Navbar />
      <Terms />
      <Footer />
    </>
  );
};

export default Terminologia;
