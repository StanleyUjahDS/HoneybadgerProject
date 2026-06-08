import React from "react";
import "./styles/platforms.css";

export default function TokenPlatforms() {
  const platforms = [
    {
      name: "PancakeSwap",
      url: "https://pancakeswap.finance/swap?chain=bsc&chainOut=bsc&inputCurrency=BNB&outputCurrency=0x5d72717Ab33F38504935960A1D8603276a76511c&exactAmount=&exactField=INPUT",
      image: `${process.env.PUBLIC_URL}/images/pancakeswap-cake-logo.png`,
    },
    {
      name: "CoinGecko",
      url: "#",
      image: `${process.env.PUBLIC_URL}/images/gecko-405ed53b475f61244130f95742a07da15f7ac30feeed5072812ae5c2d73b6194.svg`,
    },
    {
      name: "CoinMarketCap",
      url: "https://coinmarketcap.com/currencies/hbadger/",
      image: `${process.env.PUBLIC_URL}/images/coinmarketcap.png`,
    },
    {
      name: "DEXTools",
      url: "https://www.dextools.io/app/token/hbadger",
      image: `${process.env.PUBLIC_URL}/images/dextools-seeklogo.png`,
    },
    {
      name: "DexScreener",
      url: "https://dexscreener.com/bsc/0xc43748bc1985bc5cef0aa1e3107b684b547a554e",
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
            <div className="PlatformLogoWrapper">
              <img
                src={platform.image}
                alt={platform.name}
                className="PlatformLogo"
              />
            </div>

            <span className="PlatformName">
              {platform.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}