import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h4>À Propos</h4>
                    <p>Nous sommes une entreprise dédiée à fournir les meilleurs services.</p>
                </div>
                <div className="divider" /> {/* Diviseur entre les colonnes */}
                <div className="footer-column">
                    <h4>Liens Utiles</h4>
                    <ul className="footer-links">
                        <li><a href="/privacy">Politique de confidentialité</a></li>
                        <li><a href="/terms">Conditions d'utilisation</a></li>
                        <li><a href="/contact">Contactez-nous</a></li>
                    </ul>
                </div>
                <div className="divider" /> {/* Diviseur entre les colonnes */}
                <div className="footer-column">
                    <h4>Suivez-nous</h4>
                    <ul className="social-links">
                        <li><a href="https://facebook.com">Facebook</a></li>
                        <li><a href="https://twitter.com">Twitter</a></li>
                        <li><a href="https://instagram.com">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Mon Application. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;