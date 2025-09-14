import React from "react";

export const Footer = () => (
  <footer
    style={{
      padding: "30px 20px",
      textAlign: "center",
      background: "#111", // fond sombre chic
      color: "#fff",
      marginTop: "60px",
    }}
  >
    <p style={{ margin: "5px 0" }}>© 2025 Avenue Parisienne</p>
    <p style={{ margin: "5px 0", fontSize: "14px", opacity: 0.8 }}>
      Tous droits réservés
    </p>

    <div style={{ marginTop: "15px" }}>
      <a
        href="https://wa.me/33646288535"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          margin: "0 10px",
          color: "#b9975b", // doré élégant
          textDecoration: "none",
          fontWeight: "bold",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {/* Icône WhatsApp dorée */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#b9975b"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.77 11.77 0 0012 .25C5.65.25.25 5.65.25 12c0 2.11.55 4.16 1.6 5.97L.28 23.75l5.93-1.54A11.73 11.73 0 0012 23.75c6.35 0 11.75-5.4 11.75-11.75 0-3.14-1.22-6.1-3.48-8.27zM12 21.5c-1.98 0-3.91-.53-5.6-1.54l-.4-.23-3.52.91.94-3.43-.25-.41A9.9 9.9 0 012.5 12c0-5.23 4.27-9.5 9.5-9.5 2.55 0 4.95.99 6.77 2.8a9.47 9.47 0 012.73 6.7c0 5.23-4.27 9.5-9.5 9.5zm5.38-7.24c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.13 3.25 5.17 4.55.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35z" />
        </svg>
        WhatsApp
      </a>
    </div>
  </footer>
);
