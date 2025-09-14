import React from "react";
import { produits } from "../mock";

export const Sneakers = () => (
  <div>
    <h2>Sneakers</h2>
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {produits.sneakers.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
          <img src={p.image} alt={p.nom} width="150" />
          <h3>{p.nom}</h3>
          <p>{p.prix}</p>
        </div>
      ))}
    </div>
  </div>
);

