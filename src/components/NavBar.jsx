import { Link } from "react-scroll";
import { useState } from "react";
import { CiCircleList } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

import "./NavBar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Ícone do menu (Aparece sempre no mobile) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <IoCloseOutline size={40} /> : <CiCircleList size={40} />}
      </div>

      {/* Menu Mobile */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>
            Início
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
