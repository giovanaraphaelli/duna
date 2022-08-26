import styles from '../styles/HomeBanner.module.css';
import Image from 'next/image';
import moons from '../public/imgs/luas.svg';
import sands from '../public/imgs/areias.svg';

const HomeBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.img} id={styles.moons}></div>

      <div className={styles.img} id={styles.sands}>
        <Image src={sands} alt="" layout="fill" objectFit="cover" />
      </div>
      <h1 className={styles.title}>DUNA</h1>
      <a href="#sobre" className="btn">
        Explore
      </a>
    </section>
  );
};

export default HomeBanner;
