import React from "react";
import "./header.css";
import bg from "../../assets/profil-removebg-preview.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          Je suis
          <span className="introName"> Gaëlle</span>
          <br />
          Développeuse Fullstack
        </span>
        <p className="introParagraph">
          Passionnée par le web, je cherche à mettre en pratique <br />
          mes compétences fraîchement acquises pour contribuer <br />à des
          projets stimulants.{" "}
        </p>
        <Link>
          <button className="btn">Contactez-moi</button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Header;
