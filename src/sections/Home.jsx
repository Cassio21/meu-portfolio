import { useState, useEffect } from "react";

import perfil from "../assets/pic_perfil.jpg";

import "./Home.css";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="section">
      <div className={`container ${loaded ? "show" : ""}`}>
        <img src={perfil} alt="Foto de perfil" className="perfil_pic" />
        <div className="intro">
          <h1>Seja bem-vindo ao Meu Portfólio.</h1>
          <h3>Desenvolvedor Frontend Jr.</h3>
          <p>
            Aqui você encontrará meus projetos e habilidades como desenvolvedor
            Frontend.
            <br /> Com uma formação em desenvolvimento e cursos voltados para as
            tecnologias mais atuais, venho aprimorando minhas habilidades para
            entregar sempre o melhor. <br />
            No meu portfólio, você encontrará projetos que refletem minha
            dedicação e capacidade de transformar ideias em realidade. <br />
            Confira meu portfólio e veja como posso ajudar a transformar suas
            ideias em soluções reais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
