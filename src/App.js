import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Home } from "./pages/Home";
import { Homme } from "./pages/Homme";
import { Femme } from "./pages/Femme";
import { ScrollToTop } from "./components/ScrolltoTop"; // 🔥 on l’importe

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />{" "}
      {/* 🔥 force le retour en haut à chaque changement de page */}
      <Header />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homme" element={<Homme />} />
          <Route path="/femme" element={<Femme />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
