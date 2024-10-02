import React from 'react';
import './Carousel.css'; // Si vous avez des styles spécifiques

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Premier élément du carousel */}
        <div className="carousel-item active">
          <img 
            src={`${process.env.PUBLIC_URL}/images/image1.jpg`} 
            className="d-block w-100" 
            alt="Projet Booki" 
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Titre 1</h5>
            <p>Description pour l'image 1</p>
          </div>
        </div>

        {/* Deuxième élément du carousel */}
        <div className="carousel-item">
          <img 
            src={`${process.env.PUBLIC_URL}/images/image2.jpg`} 
            className="d-block w-100" 
            alt="Projet Kasa" 
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Titre 2</h5>
            <p>Description pour l'image 2</p>
          </div>
        </div>
      </div>

      {/* Contrôles du carousel */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;