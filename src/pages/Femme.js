import React from "react";

export const Femme = () => {
  return (
    <div className="collection-page">
      {/* Hero */}
      <section className="collection-hero">
        <img src="/images/Femme-hero.jpg" alt="Collection Homme" />
        <div className="hero-text">
          <h1>Collection Femme</h1>
          <p>Raffinement et sophistication</p>
        </div>
      </section>

      {/* Maroquinerie */}
      <section className="collection-section">
        <h2 className="section-title gold-text">Maroquinerie</h2>
        <p className="section-subtitle">Nos best-sellers</p>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/LV_Alma_BB.jpeg" alt="Sac Femme" />
            <h3>Sac Alma BB</h3>
            <p className="price">240€</p>
          </div>
          <div className="product-card">
            <img src="/images/LV_Nano.jpeg" alt="Porte Carte" />
            <h3>Sac Nano</h3>
            <p className="price">220€</p>
          </div>
        </div>
      </section>

      {/* Sneakers */}
      <section className="collection-section">
        <h2 className="section-title gold-text">Sneakers</h2>
        <p className="section-subtitle">Les modèles iconiques</p>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/LV_Olympia.jpeg" alt="Sneaker Homme" />
            <h3>Olympia</h3>
            <p className="price">200€</p>
          </div>
          <div className="product-card">
            <img src="/images/LV_Run_55.jpeg" alt="Sneaker Homme" />
            <h3>Run 55</h3>
            <p className="price">200€</p>
          </div>
          <div className="product-card">
            <img src="/images/LV_Trainer_rose.jpeg" alt="Sneaker Homme" />
            <h3>Trainer Rose</h3>
            <p className="price">200€</p>
          </div>
          <div className="product-card">
            <img src="/images/Sandales_Chypres_Noir.jpeg" alt="Sneaker Homme" />
            <h3>Sandales Chypres Noir</h3>
            <p className="price">180€</p>
          </div>
          <div className="product-card">
            <img
              src="/images/Sandales_Chypres_Blanche.jpeg"
              alt="Sneaker Homme"
            />
            <h3>Sandales Chypres Blanc</h3>
            <p className="price">180€</p>
          </div>
          <div className="product-card">
            <img src="/images/Sandales_Oran_Noir.jpeg" alt="Sneaker Homme" />
            <h3>Sandales Oran Noir</h3>
            <p className="price">180€</p>
          </div>
          <div className="product-card">
            <img src="/images/Sandales_Oran_Blanc.jpeg" alt="Sneaker Homme" />
            <h3>Sandales Oran Blanc</h3>
            <p className="price">180€</p>
          </div>
        </div>
      </section>

      {/* Rappel */}
      <section className="collection-note">
        <p>
          ✨ Seuls nos best-sellers sont affichés. Nous possédons tous les
          modèles et proposons la personnalisation de votre choix.
        </p>
      </section>
    </div>
  );
};
