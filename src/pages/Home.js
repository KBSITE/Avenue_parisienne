import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Fullscreen */}
      <section className="hero">
        <h1>Bienvenue sur Avenue Parisienne</h1>
        <p>L'élégance à portée de main'</p>
      </section>

      {/* Section Homme */}
      <section className="category-section">
        <img
          src="/images/LV HOMME.jpeg"
          alt="Collection Homme"
          className="cat-image"
        />
        <div className="cat-text">
          <h2 className="cat-title gold-text">Collection Homme</h2>
          <p className="cat-subtitle">Élégance et style au masculin</p>
          <Link to="/homme" className="btn-discover gold-btn">
            Découvrir
          </Link>
        </div>
      </section>

      {/* Section Femme */}
      <section className="category-section reverse">
        <img
          src="/images/Femme-hero.jpg"
          alt="Collection Femme"
          className="cat-image"
        />
        <div className="cat-text">
          <h2 className="cat-title gold-text">Collection Femme</h2>
          <p className="cat-subtitle">Raffinement et sophistication</p>
          <Link to="/femme" className="btn-discover gold-btn">
            Découvrir
          </Link>
        </div>
      </section>

      {/* Comment Commander */}
      <section className="how-to-order">
        <h2 className="gold-text">Comment Commander ?</h2>
        <p className="how-subtitle">
          Tous nos modèles sont disponibles, même s’ils ne figurent pas encore
          sur le site ✨
        </p>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Trouve ton/tes produit(s)</h3>
            <p className="step-text">
              Choisis tes produits sur notre site. Tu peux aussi nous envoyer
              une photo sur WhatsApp, même si l’article n’est pas affiché ici.
            </p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Tes informations</h3>
            <p className="step-text">
              Indique ton Nom, Prénom, Adresse, Ville, Code postal, Téléphone.
            </p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Le paiement</h3>
            <p className="step-text">
              Paiement sécurisé par virement instantané.
            </p>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <h3 className="step-title">Finalisation</h3>
            <p className="step-text">
              Une fois validée ✅ la commande est lancée. Livraison avec numéro
              de suivi.
            </p>
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="guarantees-section">
        <h2 className="section-title gold-text">Nos Services</h2>

        <div className="guarantees">
          <div className="guarantee">
            <img
              src="/icons/premium quality.svg"
              alt="Qualité Premium"
              className="guarantee-icon"
            />
            <h4>Qualité Premium</h4>
            <p>Une qualité inégalable, comparable à personne.</p>
          </div>

          <div className="guarantee">
            <img
              src="/icons/fullset.svg"
              alt="Full Set"
              className="guarantee-icon"
            />
            <h4>Full Set</h4>
            <p>Facture à votre nom + boîte originale (en option).</p>
          </div>

          <div className="guarantee">
            <img
              src="/icons/gravage.svg"
              alt="Gravage"
              className="guarantee-icon"
            />
            <h4>Gravage Personnalisé</h4>
            <p>Service de gravage disponible (en option).</p>
          </div>

          <div className="guarantee">
            <img
              src="/icons/assistance.svg"
              alt="Support 24/7"
              className="guarantee-icon"
            />
            <h4>Assistance 24/7</h4>
            <p>Une équipe disponible jour et nuit pour vous.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
