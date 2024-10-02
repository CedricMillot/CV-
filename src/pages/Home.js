import React, { useEffect, useState } from 'react';
import './Home.css';
import Carousel from '../components/Carousel';

const Home = () => {
  const [showPhoto, setShowPhoto] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showSkillsTitle, setShowSkillsTitle] = useState(false);
  const [showLogos, setShowLogos] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowPhoto(true), 300),
      setTimeout(() => setShowTitle(true), 300),
      setTimeout(() => setShowText(true), 300),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;

    // Changer la couleur d'arrière-plan selon le défilement
    if (offset < 300) {
      setBackgroundColor('#e0e0e0'); // Gris clair
    } else if (offset < 600) {
      setBackgroundColor('#b0b0b0'); // Gris moyen
    } else if (offset < 1200) {
      setBackgroundColor('#808080'); // Gris
    } else {
      setBackgroundColor('#404040'); // Gris foncé 
    }

    // Contrôle de la visibilité des éléments
    setShowPhoto(offset <= 400);          // Affiche la photo
    setShowTitle(offset <= 400);          // Affiche le titre
    setShowText(offset <= 400);           // Affiche le texte
    setShowExperience(offset > 400 && offset <= 750); // Affiche la section d'expérience
    setShowCarousel(offset > 400 && offset <= 750);   // Affiche le carousel
    setShowSkillsTitle(offset > 750);     // Affiche le titre des compétences
    setShowLogos(offset > 750);           // Affiche les logos
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ backgroundColor, transition: 'background-color 0.5s ease' }}>
      <div className="page-container">
        <div className={`intro-title ${showTitle ? 'show' : ''}`}>
          <h1>Bienvenue sur mon CV</h1>
        </div>
        <div className="home-container">
          <div className="intro-section">
            <div className="profile-and-text">
              <div className={`profile-photo-container ${showPhoto ? 'show' : ''}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/photo.jpg`}
                  alt="Cédric Millot"
                  className="profile-photo"
                />
              </div>
              <div className="text-section">
                <div className={`card title-card ${showTitle ? 'show' : ''}`}>
                  <h2>Cédric Millot</h2>
                </div>
                <div className={`card text-card ${showText ? 'show' : ''}`}>
                  <p>
                    Bonjour et bienvenue sur mon CV en ligne !
                    <br />
                    Je m'appelle Cédric Millot, passionné par [votre domaine d'expertise]. Avec [nombre d'années d'expérience] années d'expérience, j'ai travaillé sur divers projets en [compétences spécifiques].
                    <br />
                    Mon approche est axée sur la collaboration et l'innovation pour créer des solutions qui répondent aux besoins des utilisateurs. Dans ce CV, vous trouverez un aperçu de mon parcours, mes compétences et quelques projets dont je suis fier.
                    <br />
                    Merci de votre visite !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background-container">
        <div id="experience-section" className={`experience-section ${showExperience ? 'show' : ''}`}>
          <h2>Mes Expériences</h2>
        </div>

        <div className={`carousel-container ${showCarousel ? 'show' : ''}`}>
          <Carousel isVisible={showCarousel} />
        </div>
      </div>

      <div className={`skills-title-container ${showSkillsTitle ? 'show' : ''}`}>
        <h2>Mes Compétences</h2>
      </div>

      <div className={`logos-container ${showLogos ? 'show' : ''}`}>
        <div className="logos">
          <img src={`${process.env.PUBLIC_URL}/images/logo_js.png`} alt="JavaScript" className={`language-logo ${showLogos ? 'show' : ''}`} />
          <img src={`${process.env.PUBLIC_URL}/images/logo_react.png`} alt="React" className={`language-logo ${showLogos ? 'show' : ''}`} />
          <img src={`${process.env.PUBLIC_URL}/images/logo_css.png`} alt="CSS" className={`language-logo ${showLogos ? 'show' : ''}`} />
          <img src={`${process.env.PUBLIC_URL}/images/logo_html.png`} alt="HTML" className={`language-logo ${showLogos ? 'show' : ''}`} />
          {/* Ajoutez d'autres logos si nécessaire */}
        </div>
      </div>

      <div style={{ height: '100px' }}></div>
    </div>
  );
};

export default Home;