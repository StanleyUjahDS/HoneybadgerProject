import React from "react";
import { FaTwitter, FaDiscord, FaTelegram, FaCoins } from "react-icons/fa";

const iconStyle = {
  margin: "0 10px",
  color: "#f0b90b",
  cursor: "pointer",
  transition: "transform 0.2s ease, filter 0.2s ease",
  filter: "drop-shadow(0 0 6px rgba(240,185,11,0.25))",
};

export default function Footer() {
  const hover = (e) => {
    e.currentTarget.style.transform = "scale(1.15)";
    e.currentTarget.style.filter = "drop-shadow(0 0 10px rgba(240,185,11,0.5))";
  };

  const leave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.filter = "drop-shadow(0 0 6px rgba(240,185,11,0.25))";
  };

  return (
    <footer
      id="CommunitySection"
      style={{
        backgroundColor: "#061315",
        color: "#e4dfbd",
        padding: "3rem 1rem",
        textAlign: "center",
        borderTop: "1px solid rgba(240,185,11,0.15)",
      }}
    >
      <div style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ marginBottom: "0.75rem", color: "#f0b90b" }}>
          Join the HBADG Community
        </h3>

        <div>
          <FaTwitter
            size={24}
            style={iconStyle}
            onClick={() => window.open("https://twitter.com/yourtoken", "_blank")}
            onMouseEnter={hover}
            onMouseLeave={leave}
          />

          <FaDiscord
            size={24}
            style={iconStyle}
            onClick={() => window.open("https://discord.gg/yourtoken", "_blank")}
            onMouseEnter={hover}
            onMouseLeave={leave}
          />

          <FaTelegram
            size={24}
            style={iconStyle}
            onClick={() => window.open("https://t.me/yourtoken", "_blank")}
            onMouseEnter={hover}
            onMouseLeave={leave}
          />

          <FaCoins
            size={24}
            style={iconStyle}
            onClick={() =>
              window.open(
                "https://www.coingecko.com/en/coins/yourtoken",
                "_blank"
              )
            }
            onMouseEnter={hover}
            onMouseLeave={leave}
          />
        </div>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <button
          style={{
            padding: "0.9rem 1.6rem",
            backgroundColor: "#f0b90b",
            color: "#061315",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 0 20px rgba(240,185,11,0.25)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 0 30px rgba(240,185,11,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 0 20px rgba(240,185,11,0.25)";
          }}
          onClick={() =>
            window.open(
              "https://pancakeswap.finance/swap?outputCurrency=YOUR_CONTRACT_ADDRESS",
              "_blank"
            )
          }
        >
          Buy HBADG
        </button>
      </div>

      <div style={{ fontSize: "0.85rem", color: "#b7bdc6" }}>
        &copy; {new Date().getFullYear()} HBADG. All rights reserved.
      </div>
    </footer>
  );
}