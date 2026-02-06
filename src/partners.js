import React from "react";
import { FaHandshake } from "react-icons/fa";

const partnerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  margin: "1rem",
  borderRadius: "12px",
  backgroundColor: "#1a2328",
  width: "150px",
  cursor: "pointer",
  transition: "transform 0.2s",
};

const iconStyle = { color: "#b28e23", marginBottom: "0.5rem", fontSize: "2rem" };

export default function Partners() {
  const partners = [
    { name: "Binance Smart Chain", url: "#" },
    { name: "PancakeSwap", url: "#" },
    { name: "BscScan", url: "#" },
    { name: "CoinGecko", url: "#" },
    { name: "CoinMarketCap", url: "#" },
  ];

  return (
    <section
      style={{
        backgroundColor: "#061315",
        padding: "3rem 1rem",
        textAlign: "center",
      }}
      id="PartnersSection"
    >
      <h2 style={{ color: "#e4dfbd", marginBottom: "2rem" }}>
        Fundamental Partners
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {partners.map((partner) => (
          <div
            key={partner.name}
            style={partnerStyle}
            onClick={() => window.open(partner.url, "_blank")}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FaHandshake style={iconStyle} />
            <span style={{ color: "#e4dfbd", fontWeight: "bold", textAlign: "center" }}>
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
