import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assurez-vous d'importer votre fichier CSS

const Navbar = () => {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience-section');
    const offset = experienceSection.getBoundingClientRect().top + window.scrollY - 100; // Ajustez pour le décalage
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Fait défiler vers le haut de la page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/"
              onClick={scrollToTop} // Appelle la fonction pour faire défiler vers le haut
            >
              Accueil
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className="nav-link experience-button" // Ajout de la classe CSS
              onClick={scrollToExperience}
            >
              Expérience
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <Link className="nav-link" to="/profile" onClick={scrollToTop}>
              Profil
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link className="nav-link" to="/contact" onClick={scrollToTop}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="social-links" style={{ position: 'absolute', right: '10px' }}>
          <a 
            className="nav-link" 
            href="https://github.com/your-github-username" // Remplacez par votre lien GitHub
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={`${process.env.PUBLIC_URL}/images/github-logo.png`} // Vérifiez le nom et l'extension du fichier
              alt="GitHub Logo" 
              style={{ width: '20px', height: '20px', marginRight: '5px' }} 
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;