import React from "react";
import { FaCoins } from "react-icons/fa";

const platformStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  margin: "1rem",
  borderRadius: "12px",
  backgroundColor: "#1a2328", // slightly lighter than main background
  width: "150px",
  cursor: "pointer",
  transition: "transform 0.2s",
};

const iconStyle = { color: "#b28e23", marginBottom: "0.5rem", fontSize: "2rem" };

export default function TokenPlatforms() {
  const platforms = [
    { name: "PancakeSwap", url: "#" },
    { name: "CoinGecko", url: "#" },
    { name: "CoinMarketCap", url: "#" },
    { name: "DEXTools", url: "#" },
    { name: "DexScreener", url: "#" }, // Added DexScreener
  ];

  return (
    <section
      style={{
        backgroundColor: "#061315",
        padding: "3rem 1rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#e4dfbd", marginBottom: "2rem" }}>
        TRACK HBADG ON
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {platforms.map((platform) => (
          <div
            key={platform.name}
            style={platformStyle}
            onClick={() => window.open(platform.url, "_blank")}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FaCoins style={iconStyle} />
            <span style={{ color: "#e4dfbd", fontWeight: "bold" }}>
              {platform.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
