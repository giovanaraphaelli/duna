import Head from 'next/head';
import HomeBanner from '../components/HomeBanner';
import Navbar from '../components/Navbar';
import HomeContent from '../components/HomeContent';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Duna</title>
        <meta name="description" content="Página sobre Duna" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#c54c07" />
      </Head>
      <Navbar />
      <HomeBanner />
      <HomeContent />
      <Footer />
    </>
  );
}
