import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "./Project.css";

// Importando imagens
import avaliaçao from "../assets/img/avaliaçao.png";
import bankist from "../assets/img/bankist.png";
import blog from "../assets/img/blog.png";
import buscamovie from "../assets/img/buscamovie.png";
import ecommerce from "../assets/img/e-commerce.png";
import game from "../assets/img/game.png";
import hatshop from "../assets/img/hatshop.png";
import jogo from "../assets/img/jogo.png";
import mapyt from "../assets/img/mapyt.png";
import ominfood from "../assets/img/ominfood.png";
import quiz from "../assets/img/quiz.png";
import todolist from "../assets/img/todolist.png";
import webbankist from "../assets/img/webbaskist.png";

const projects = [
  {
    id: 1,
    title: "OMNIFOOD",
    description:
      "Desenvolvimento de um site para um serviço de assinatura alimentar, focado em experiência do usuário e acessibilidade. O projeto foi construído utilizando HTML, CSS e JavaScript, garantindo um design moderno e responsivo para dispositivos móveis, proporcionando uma navegação intuitiva em qualquer tela.",
    image: ominfood,
    link: "https://omniifood-cassio.netlify.app/",
  },
  {
    id: 2,
    title: "Bankist app",
    description:
      "Aplicação bancária fictícia criada para simular transações financeiras. Utiliza HTML, CSS e JavaScript para gerenciar depósitos, transferências e saques, proporcionando uma experiência interativa e intuitiva.",
    image: bankist,
    link: "https://bankistaapp.netlify.app/",
  },
  {
    id: 3,
    title: "CharlieBlog",
    description:
      "Plataforma de blog responsiva, desenvolvida com HTML, CSS e JavaScript. Permite a leitura e organização de artigos de maneira fluida, priorizando uma interface minimalista e amigável.",
    image: blog,
    link: "https://charliiebloog.netlify.app/",
  },
  {
    id: 4,
    title: "InfoFilmes",
    description:
      "Catálogo de filmes com busca interativa, desenvolvido com React.js e consumo de API. Apresenta informações detalhadas sobre cada filme, incluindo sinopse, avaliações e elenco.",
    image: buscamovie,
    link: "https://infofilmes.vercel.app/",
  },
  {
    id: 5,
    title: "Validador de Formulário",
    description:
      "Aplicação para validação de formulários em tempo real, utilizando JavaScript puro. Ajuda a garantir que os dados inseridos sejam corretos antes do envio, melhorando a experiência do usuário.",
    image: ecommerce,
    link: "https://js-validador.vercel.app/",
  },
  {
    id: 6,
    title: "Palavras Secretas",
    description:
      "Jogo de adivinhação de palavras, criado com React.js. O usuário deve descobrir a palavra oculta antes de esgotar as tentativas, testando seus conhecimentos e raciocínio rápido.",
    image: game,
    link: "https://palavrassecretas.netlify.app/",
  },
  {
    id: 7,
    title: "Hat Shop",
    description:
      "E-commerce de chapéus, desenvolvido com HTML, CSS e Bootstrap. Design responsivo e moderno, permitindo aos usuários navegarem facilmente pelos produtos e simular compras.",
    image: hatshop,
    link: "https://hatshopp.netlify.app/",
  },
  {
    id: 8,
    title: "Adivinhe o Numero",
    description:
      "Jogo interativo de adivinhação, onde o usuário precisa descobrir um número gerado aleatoriamente. Criado com JavaScript puro, reforçando lógica de programação e manipulação do DOM.",
    image: jogo,
    link: "https://adivinheessenumero.netlify.app/",
  },
  {
    id: 9,
    title: "Mappy",
    description:
      "Aplicação de mapeamento interativo, que permite visualizar locais e interagir com mapas dinâmicos. Construída com JavaScript e APIs de geolocalização.",
    image: mapyt,
    link: "https://mappytt.netlify.app/",
  },
  {
    id: 10,
    title: "Deixe seu comentário",
    description:
      "Plataforma para envio de comentários, desenvolvida com React.js e integração com um banco de dados para armazenamento de mensagens.",
    image: avaliaçao,
    link: "https://deixeseucomentario.vercel.app/",
  },
  {
    id: 11,
    title: "Quiz Dev",
    description:
      "Jogo de perguntas e respostas sobre programação, criado com React.js.Ideal para quem deseja testar e aprimorar seus conhecimentos na área.",
    image: quiz,
    link: "https://quizdevelopers.vercel.app/",
  },
  {
    id: 12,
    title: "Task Master",
    description:
      "Lista de tarefas com funcionalidades avançadas.Desenvolvido com React.js.Permite adicionar, editar e excluir tarefas, auxiliando na organização do dia a dia.",
    image: todolist,
    link: "https://task-master-ts.vercel.app/",
  },
  {
    id: 13,
    title: "Bankist web",
    description:
      "Versão web do Bankist para gerenciar finanças.Interface bancária fictícia, construída com HTML, CSS e JavaScript.",
    image: webbankist,
    link: "https://bankistweb.vercel.app/",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section id="projects" className="section">
      <h2>Meus Projetos</h2>
      <h3>Aqui estão alguns dos trabalhos que desenvolvi.</h3>
      <div className="carousel">
        <SlArrowLeft className="prev" onClick={prevProject} />
        <div className="project">
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="project-image"
          />
          <h3>{projects[currentIndex].title}</h3>
          <p>{projects[currentIndex].description}</p>
          <a
            href={projects[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Ver Projeto
          </a>
        </div>
        <SlArrowRight className="next" onClick={nextProject} />
      </div>
    </section>
  );
};

export default Projects;
