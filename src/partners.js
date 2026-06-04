import React from "react";
import { FaHandshake } from "react-icons/fa";

const partnerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  padding: "1.25rem",
  margin: "1rem",

  borderRadius: "16px",

  width: "160px",
  cursor: "pointer",

  background:
    "linear-gradient(180deg, rgba(240,185,11,0.06), #181a20)",

  border: "1px solid rgba(240,185,11,0.25)",

  boxShadow: "0 10px 25px rgba(0,0,0,0.45)",

  transition: "all 0.25s ease",

  color: "#eaecef",
};

const iconStyle = {
  color: "#f0b90b",
  marginBottom: "0.5rem",
  fontSize: "2rem",
  filter: "drop-shadow(0 0 10px rgba(240,185,11,0.25))",
};

export default function Partners() {
  const partners = [
    { name: "Binance Smart Chain", url: "https://www.bnbchain.org" },
    { name: "PancakeSwap", url: "https://pancakeswap.finance" },
    { name: "BscScan", url: "https://bscscan.com" },
    { name: "CoinGecko", url: "https://www.coingecko.com" },
    { name: "CoinMarketCap", url: "https://coinmarketcap.com" },
  ];

  return (
    <section
      id="PartnersSection"
      style={{
        background:
          "radial-gradient(circle at top, rgba(240,185,11,0.05), transparent 45%), #0b0e11",
        padding: "4rem 1rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#f0b90b",
          marginBottom: "2.5rem",
          fontSize: "2.5rem",
          fontWeight: "800",
          textShadow: "0 0 15px rgba(240,185,11,0.2)",
        }}
      >
        Fundamental Partners
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {partners.map((partner) => (
          <div
            key={partner.name}
            style={partnerStyle}
            onClick={() => window.open(partner.url, "_blank")}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
              e.currentTarget.style.borderColor = "#f0b90b";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(240,185,11,0.15), 0 15px 35px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.borderColor = "rgba(240,185,11,0.25)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.45)";
            }}
          >
            <FaHandshake style={iconStyle} />
            <span
              style={{
                color: "#b7bdc6",
                fontWeight: "600",
                textAlign: "center",
                fontSize: "0.95rem",
              }}
            >
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}