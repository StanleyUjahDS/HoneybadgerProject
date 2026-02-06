import React from "react";
import { FaTwitter, FaDiscord, FaTelegram, FaCoins } from "react-icons/fa";

const iconStyle = {
  marginRight: "12px",
  color: "#e4dfbd", // HBADG accent color
  cursor: "pointer",
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#061315",
        color: "#e4dfbd",
        padding: "2rem",
        textAlign: "center",

      }} id="CommunitySection"
    >
      <div style={{ marginBottom: "1rem" }}>
        <h3 style={{ marginBottom: "0.5rem" }}>Join the HBADG Community</h3>
        <div>
          <FaTwitter style={iconStyle} size={24} onClick={() => window.open("https://twitter.com/yourtoken","_blank")} />
          <FaDiscord style={iconStyle} size={24} onClick={() => window.open("https://discord.gg/yourtoken","_blank")} />
          <FaTelegram style={iconStyle} size={24} onClick={() => window.open("https://t.me/yourtoken","_blank")} />
          <FaCoins style={iconStyle} size={24} onClick={() => window.open("https://www.coingecko.com/en/coins/yourtoken","_blank")} />
        </div>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <button
          style={{
            padding: "0.8rem 1.5rem",
            backgroundColor: "#b28e23",
            color: "#061315",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => window.open("https://pancakeswap.finance/swap?outputCurrency=YOUR_CONTRACT_ADDRESS","_blank")}
        >
          Buy HBADG
        </button>
      </div>

      <div style={{ fontSize: "0.8rem" }}>
        &copy; {new Date().getFullYear()} HBADG. All rights reserved.
      </div>
    </footer>
  );
}
