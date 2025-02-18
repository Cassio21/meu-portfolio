import "./About.css";
import DownloadIcon from "@mui/icons-material/Download";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoGithub,
  IoLogoNpm,
} from "react-icons/io5";
import {
  SiTypescript,
  SiMongodb,
  SiJavascript,
  SiBootstrap,
  SiFigma,
} from "react-icons/si";

// Função para definir o delay da animação
const delayStyle = (delay) => ({ "--delay": `${delay}s` });

function About() {
  return (
    <section id="about" className="section">
      <h2>Sobre Mim</h2>
      <p>
        Olá, sou Cássio Cavalcanti, apaixonado por tecnologia e em constante
        evolução como desenvolvedor. Tenho experiência com administração, mas
        foi no desenvolvimento web que encontrei minha verdadeira paixão.
        Atualmente, estou me especializando em React, Node.js e MongoDB. Meu
        foco é criar soluções práticas e eficientes, sempre buscando melhorar
        meus conhecimentos e aplicar o que aprendo em projetos reais. Estou
        determinado a alcançar meu objetivo de me tornar um desenvolvedor full
        stack e estou aberto a novas oportunidades que me permitam crescer ainda
        mais. Se você quiser saber mais ou discutir sobre tecnologia, estou à
        disposição!
      </p>

      <div className="skills">
        <h3>Minhas Habilidades</h3>
        <div className="skills-container">
          <div className="skills-track">
            {/* Ícones - Primeira sequência */}
            <IoLogoHtml5 className="icon" style={delayStyle(1)} />
            <IoLogoCss3 className="icon" style={delayStyle(2)} />
            <SiBootstrap className="icon" style={delayStyle(3)} />
            <SiFigma className="icon" style={delayStyle(4)} />
            <SiJavascript className="icon" style={delayStyle(5)} />
            <IoLogoReact className="icon" style={delayStyle(6)} />
            <SiTypescript className="icon" style={delayStyle(7)} />
            <IoLogoNodejs className="icon" style={delayStyle(8)} />
            <SiMongodb className="icon" style={delayStyle(9)} />
            <IoLogoGithub className="icon" style={delayStyle(10)} />
            <IoLogoNpm className="icon" style={delayStyle(11)} />
          </div>
        </div>
      </div>

      <div className="download">
        <a href="/curriculo.pdf" download className="download-button">
          <DownloadIcon /> Download Currículo
        </a>
      </div>
    </section>
  );
}

export default About;
