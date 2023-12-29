import React from "react";
import "./header.css";
import bg from "../../assets/graph.png";
import bg1 from "../../assets/graph-2.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <section id="intro">
      <div className="image-container">
        <img src={bg} alt="" className="bg" />
        <img src={bg1} alt="" className="bg1" />
      </div>
      <div className="introContent">
        <span className="hello">Hello, je suis</span>
        <span className="introName"> Gaëlle Poenou.</span>
        Je construis des choses pour le Web
        <p className="introParagraph">
          Développeuse web passionnée, je cherche à mettre en pratique <br />
          mes compétences fraîchement acquises pour contribuer <br />à des
          projets stimulants.{" "}
        </p>
        <Link>
          <button className="btn">Contactez-moi</button>
        </Link>
      </div>
    </section>
  );
};

export default Header;
