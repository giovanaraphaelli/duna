import styles from '../styles/HomeContent.module.css';
import Link from 'next/link';

const HomeContent = () => {
  return (
    <section className={styles.content} id="sobre">
      <h2> Sobre </h2>
      <p>
        Duna (no original em inglês Dune) é um romance de ficção científica do
        escritor americano Frank Herbert (1920-1986), publicado originalmente
        pela editora Chilton Books nos Estados Unidos em 1965. Vencedor do
        prêmio Hugo de 1966, Duna é considerado o livro de ficção científica
        mais vendido de todos os tempos. Independentemente de seu sucesso
        comercial, Duna é continuadamente apontada como uma das mais renomadas
        obras de ficção e fantasia já lançadas, e um dos pilares da ficção
        científica moderna. Consistindo no início da série Duna, a história
        contida no livro é expandida em outros cinco livros e um conto, todos
        escritos por Herbert, além de mais de uma dúzia de outros livros,
        escritos pelo filho do autor, Brian Herbert, em parceria com o também
        escritor americano Kevin J. Anderson (todos eles desenvolvidos e
        publicados posteriormente a morte de Frank Herbert).
      </p>
      <br />
      <p>
        Duna se passa em um futuro distante no meio de um império intergaláctico
        feudal em expansão, onde feudos planetários são controlados por Casas
        nobres que devem aliança à casta imperial da Casa Corrino. O livro conta
        a história do jovem Paul Atreides, herdeiro do Duque Leto Atreides e da
        respectiva Casa Atreides, na ocasião da transferência de sua família
        para o planeta Arrakis, a única fonte no universo da especiaria melange.
        Em uma história que explora as complexas interações entre política,
        religião, ecologia, tecnologia e escolhas e consequências em alicerce às
        emoções humanas, o destino de Paul, sua família, seu novo planeta e seus
        habitantes nativos, os subestimados fremen, assim como o destino do
        Imperador Padishah, da poderosa Corporação Espacial a seu serviço e da
        misteriosa ordem feminina das Bene Gesserit, acabam todos interligados
        em um confronto que mudará o curso da humanidade.
      </p>
      <br />
      <p>
        Frank Herbert fez uma grande inovação em Duna ao rechear o romance de
        citações/elementos que remetem a paradoxos filosóficos, religiosos e
        psicológicos, e que até então nunca haviam sido usados na literatura de
        ficção em geral. Além desses temas, Duna trata também de aspectos
        importantes da ecologia e da biologia. O ambiente de Duna é notável por
        não possuir computadores, já que a religião do Império proíbe o uso de
        máquinas pensantes, temendo que estas possam destruir a humanidade. Todo
        o trabalho de cálculos complicados é feito pelos Mentats, homens
        treinados desde a infância para usarem suas mentes como computadores.
      </p>
    </section>
  );
};

export default HomeContent;
