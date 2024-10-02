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
  const [moveOut, setMoveOut] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowPhoto(true), 200),
      setTimeout(() => setShowTitle(true), 200),
      setTimeout(() => setShowText(true), 200),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    setMoveOut(offset > 500);
    setShowExperience(offset > 150);
    setShowCarousel(offset > 400);
    setShowSkillsTitle(offset > 900);
    setShowTitle(offset <= 350);
    setShowText(offset <= 350);
    setShowPhoto(offset <= 350);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="page-container">
        <div className={`intro-title ${showTitle ? 'show' : ''}`}>
          <h1>Bienvenue sur mon CV</h1>
        </div>
        <div className="home-container">
          <div className="intro-section">
            <div className="profile-and-text">
              <div
                className={`profile-photo-container ${showPhoto ? 'show' : ''} ${moveOut ? 'move-out' : ''}`}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/photo.jpg`}
                  alt="Cédric Millot"
                  className="profile-photo"
                />
              </div>
              <div className="text-section">
                <div className={`card title-card ${showTitle ? 'show' : ''} ${moveOut ? 'move-out' : ''}`}>
                  <h2>Cédric Millot</h2>
                </div>
                <div className={`card text-card ${showText ? 'show' : ''} ${moveOut ? 'move-out' : ''}`}>
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

      <div style={{ height: '1000px' }}></div>
    </div>
  );
};

export default Home;