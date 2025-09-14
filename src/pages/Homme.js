import React from "react";

export const Homme = () => {
  return (
    <div className="collection-page">
      {/* Hero */}
      <section className="collection-hero">
        <img src="/images/LV HOMME.jpeg" alt="Collection Homme" />
        <div className="hero-text">
          <h1>Collection Homme</h1>
          <p>Élégance & style au masculin</p>
        </div>
      </section>

      {/* Maroquinerie */}
      <section className="collection-section">
        <h2 className="section-title gold-text">Maroquinerie</h2>
        <p className="section-subtitle">Nos best-sellers</p>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/Slingbag_NM.jpeg" alt="Sac Homme" />
            <h3>Avenue Slingbag NM</h3>
            <p className="price">230€</p>
          </div>
          <div className="product-card">
            <img src="/images/Slingbag_PM.jpeg" alt="Porte Carte" />
            <h3>Avenue Slingbag PM</h3>
            <p className="price">230€</p>
          </div>
          <div className="product-card">
            <img src="/images/District_PM.jpeg" alt="Ceinture" />
            <h3>District PM</h3>
            <p className="price">240€</p>
          </div>
          <div className="product-card">
            <img src="/images/Trio_Messenger.jpeg" alt="Ceinture" />
            <h3>Trio Messenger</h3>
            <p className="price">250€</p>
          </div>
          <div className="product-card">
            <img src="/images/LV_Keepal1.jpeg" alt="Ceinture" />
            <h3>Keepal Bandouillère</h3>
            <p className="price">250€</p>
          </div>
          <div className="product-card">
            <img src="/images/LV_Keepal2.jpeg" alt="Ceinture" />
            <h3>Keepal Bandouillère</h3>
            <p className="price">250€</p>
          </div>
          <div className="product-card">
            <img src="/images/Slingduo.jpeg" alt="Ceinture" />
            <h3>Sling duo</h3>
            <p className="price">250€</p>
          </div>
          <div className="product-card">
            <img src="/images/Pulse_messenger.jpeg" alt="Ceinture" />
            <h3>Pulse Messenger</h3>
            <p className="price">250€</p>
          </div>
          <div className="product-card">
            <img src="/images/Belvedere_MM_gris.jpeg" alt="Ceinture" />
            <h3>Belvedere MM</h3>
            <p className="price">220€</p>
          </div>
          <div className="product-card">
            <img src="/images/Prada_Renylonetcuir.jpeg" alt="Ceinture" />
            <h3>Re-Nylon et cuir</h3>
            <p className="price">220€</p>
          </div>
          <div className="product-card">
            <img src="/images/Dior_Saddle.jpeg" alt="Ceinture" />
            <h3>Saddle</h3>
            <p className="price">230€</p>
          </div>
          <div className="product-card">
            <img src="/images/Dior_Messenger.jpeg" alt="Ceinture" />
            <h3>Messenger à Rabat Saddle</h3>
            <p className="price">230€</p>
          </div>
        </div>
      </section>

      {/* Sneakers */}
      <section className="collection-section">
        <h2 className="section-title gold-text">Sneakers</h2>
        <p className="section-subtitle">Les modèles iconiques</p>
        <div className="product-grid">
          <div className="product-card">
            <img src="/images/LV_Trainer_Noir.jpeg" alt="Sneaker Homme" />
            <h3>Trainer Noir</h3>
            <p className="price">200€</p>
          </div>
          <div className="product-card">
            <img src="/images/LV_Trainer_Bleu.jpeg" alt="Sneaker Homme" />
            <h3>Trainer Bleu</h3>
            <p className="price">200€</p>
          </div>
          <div className="product-card">
            <img src="/images/LV_runaway_noir.jpeg" alt="Sneaker Homme" />
            <h3>Run Away Noir</h3>
            <p className="price">200€</p>
          </div>
          <div className="product-card">
            <img src="/images/LV_runaway_Bleu.jpeg" alt="Sneaker Homme" />
            <h3>Run Away Blanc</h3>
            <p className="price">200€</p>
          </div>
          <div className="product-card">
            <img src="/images/Hermes_bouncing_noir.jpeg" alt="Sneaker Homme" />
            <h3>Bouncing Noir</h3>
            <p className="price">200€</p>
          </div>
          <div className="product-card">
            <img src="/images/Hermes_bouncing_blanc.jpeg" alt="Sneaker Homme" />
            <h3>Bouncing Blanc</h3>
            <p className="price">200€</p>
          </div>
          <div className="product-card">
            <img src="/images/Prada_Americacup_noir.jpeg" alt="Sneaker Homme" />
            <h3>America's cup Noir</h3>
            <p className="price">200€</p>
          </div>
          <div className="product-card">
            <img
              src="/images/Prada_Americacup_rouge.jpeg"
              alt="Sneaker Homme"
            />
            <h3>America's cup Rouge</h3>
            <p className="price">200€</p>
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
