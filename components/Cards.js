import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Cards.module.css';

const Cards = (props) => {
  return (
    <>
      {props.data.map(
        ({ slug, name, homePlanet, birthDate, photoPath, genre }) => (
          <div key={slug} className={styles.card}>
            <figure>
              <Image
                src={photoPath}
                alt=""
                width={200}
                height={200}
                objectFit="cover"
              />
            </figure>
            <div className={styles.cardContent}>
              <h3>{name}</h3>
              <p>
                <strong>Planeta Natal: </strong>
                {homePlanet}
              </p>
              <p>
                <strong>Data de nascimento: </strong>
                {birthDate}
              </p>
              <p>
                <strong>Gênero: </strong>
                {genre}
              </p>
            </div>
            <Link href={props.href + slug}>
              <a className="btn">Saiba Mais</a>
            </Link>
          </div>
        )
      )}
    </>
  );
};

export default Cards;
