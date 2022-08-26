import { useState } from 'react';
import { terminologia } from '../data/terminologia.json';
import styles from '../styles/Terms.module.css';

const Terms = () => {
  const [search, setSearch] = useState('');

  const lowerSearch = search.toLowerCase();

  const termFiltered = terminologia.filter((term) =>
    term.word.toLowerCase().includes(lowerSearch)
  );

  return (
    <main className={styles.container}>
      <h1>Terminologia do Império</h1>
      <p className={styles.subtitle}>Faça sua busca:</p>

      <input
        type="text"
        value={search}
        placeholder="Digite aqui"
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className={styles.termContainer}>
        {termFiltered.map((term) => (
          <div key={term.word} className={styles.term}>
            <h3>{term.word}</h3>
            <p>{term.meaning}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Terms;
