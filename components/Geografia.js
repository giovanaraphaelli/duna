import React from 'react';
import Image from 'next/image';
import styles from '../styles/Geografia.module.css';
import Arrakis from '../public/imgs/duna.jpg';

const Geografia = () => {
  return (
    <main className={styles.container}>
      <h1>Geografia de Arrakis</h1>
      <figure className={styles.containerImg}>
        <Image src={Arrakis} width={530} height={395} objectFit="cover" />
      </figure>
      <div>
        <p className={styles.subtitle}>Arrakis</p>
        <p>
          Arrakis é principalmente coberto por terrenos desérticos semelhantes
          ao Saara da Velha Terra. O deserto plano e aberto, conhecido como
          Great Flat, vai de aprox. 60°N a 70°S e consiste quase inteiramente de
          dunas de areia, com afloramentos rochosos muito raros. As dunas de
          areia têm cerca de 100m de espessura, situadas no leito rochoso abaixo
          (conhecido como Great Bled, que forma o “nível do mar” em Arrakis). A
          Grande Planície é varrida pelas enormes tempestades coriolis que
          assolam o deserto aberto. Essas tempestades podem engolir grandes
          partes do planeta por dias ou semanas, impossibilitando qualquer
          viagem suborbital.
        </p>
      </div>
    </main>
  );
};

export default Geografia;
