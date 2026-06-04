import React from "react";
import { FaCoins } from "react-icons/fa";
import "./styles/platforms.css";

export default function TokenPlatforms() {
 const platforms = [
  {
    name: "PancakeSwap",
    url: "#",
    image: `${process.env.PUBLIC_URL}/images/platforms/pancakeswap.png`,
  },
  {
    name: "CoinGecko",
    url: "#",
    image: `${process.env.PUBLIC_URL}/images/gecko-405ed53b475f61244130f95742a07da15f7ac30feeed5072812ae5c2d73b6194.svg`,
  },
  {
    name: "CoinMarketCap",
    url: "#",
    image: `${process.env.PUBLIC_URL}/images/platforms/coinmarketcap.png`,
  },
  {
    name: "DEXTools",
    url: "#",
    image: `${process.env.PUBLIC_URL}/images/dextools-seeklogo.png`,
  },
  {
    name: "DexScreener",
    url: "#",
    image: `${process.env.PUBLIC_URL}/images/dex-screener-seeklogo.png`,
  },
];
  return (
    <section className="PlatformsSection">
      <h2 className="PlatformsTitle">
        TRACK HBADG ON
      </h2>

      <div className="PlatformsGrid">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="PlatformCard"
            onClick={() => window.open(platform.url, "_blank")}
          >
            <img src={platform.image} alt={platform.name} className="PlatformIcon" />

            <span className="PlatformName">
              {platform.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}