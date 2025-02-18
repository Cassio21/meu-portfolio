import "./Contact.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiGmail, SiWhatsapp } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contato</h2>
      <p>Entre em contato comigo através das redes sociais:</p>

      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/cassio-cavalcanti"
          target="_blank"
          rel="Linkedin"
        >
          <FiLinkedin className="contact-icon" />
        </a>

        <a href="https://wa.me/5521994331556" rel="noreferrer" target="_blank">
          <SiWhatsapp className="contact-icon" />
        </a>

        <a href="mailto:cassiotenoriosc@gmail.com" rel="Gmail">
          <SiGmail className="contact-icon" />
        </a>

        <a href="https://github.com/Cassio21" target="_blank" rel="Github">
          <FiGithub className="contact-icon" />
        </a>
      </div>

      <footer className="end">
        {" "}
        <a href="">Cássio Cavalcanti</a> &copy; {new Date().getFullYear()} Todos
        os direitos reservados.
      </footer>
    </section>
  );
};

export default Contact;
