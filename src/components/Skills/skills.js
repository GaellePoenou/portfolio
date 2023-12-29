import React from "react";
import "./skills.css";
import profil from "../../assets/profil-removebg-preview.png";
import angular from "../../assets/angular-logo-48.png";
import bootstrap from "../../assets/bootstrap-logo-48.png";
import css3 from "../../assets/css3-logo-48.png";
import tailwind from "../../assets/tailwind-css-logo-48.png";
import html5 from "../../assets/html5-logo-48.png";
import javascript from "../../assets/javascript-logo-48.png";
import php from "../../assets/php-logo-48.png";
import react from "../../assets/react-logo-48.png";
import wordpress from "../../assets/wordpress-logo-48.png";
import git from "../../assets/git-logo-48.png";
import github from "../../assets/github-logo-48.png";
import shopify from "../../assets/shopify-logo-48.png";

const Skills = () => {
  return (
    <section id="skills">
      <h2>
        <span className="highlight">02.</span> About
      </h2>
      <div className="container">
        <img src={profil} alt="" className="profil" />
        <p className="text">
          En tant que passionnée de développement web, j'explore constamment de
          nouvelles façons d'appliquer mes <span>compétences</span> fraîchement
          acquises.
          <br /> Ma capacité à m'adapter rapidement et ma{" "}
          <span className="highlight">motivation</span> innée font de moi une
          personne adaptable et prête à relever des défis.
          <br /> À la recherche d'opportunités de contribuer à des{" "}
          <span className="highlight">projets intéressants</span>, je suis
          convaincue que chaque ligne de code est une petite victoire. <br />{" "}
          Mon approche simple et ma{" "}
          <span className="highlight">nature curieuse</span> font de moi une
          candidate prête à apporter une touche de créativité à toute équipe.
        </p>
      </div>

      <div id="skillsContainer">
        <p className="text">Les technologies que j'utilise dernièrement:</p>
        <div class="skillsRow group1">
          <div class="skill">
            <img src={html5} alt="" />
          </div>
          <div class="skill">
            <img src={css3} alt="" />
          </div>
          <div class="skill">
            <img src={javascript} alt="" />
          </div>
          <div class="skill">
            <img src={php} alt="" />
          </div>
        </div>

        <div class="skillsRow group2">
          <div class="skill">
            <img src={angular} alt="" />
          </div>
          <div class="skill">
            <img src={react} alt="" />
          </div>
          <div class="skill">
            <img src={bootstrap} alt="" />
          </div>
          <div class="skill">
            <img src={tailwind} alt="" />
          </div>
        </div>

        <div class="skillsRow group3">
          <div class="skill">
            <img src={git} alt="" />
          </div>
          <div class="skill">
            <img src={github} alt="" />
          </div>
          <div class="skill">
            <img src={wordpress} alt="" />
          </div>
          <div class="skill">
            <img src={shopify} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
