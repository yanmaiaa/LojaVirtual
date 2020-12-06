import React from "react";
import styles from "./Contato.module.css";
import imagem from "../img/contact.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="LojaVirtual | Contato" description="Entre em contato" />
      <img src={imagem} alt="Imagem Contato" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>yandamasceno01@gmail.com</li>
          <li>9999-1234</li>
          <li>Rua X - Salvador (BA)</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
