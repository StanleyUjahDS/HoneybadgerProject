import "./styles/footer.css";
import { FaTwitter, FaDiscord, FaTelegram, FaCoins } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { icon: FaTwitter, url: "https://twitter.com/yourtoken" },
    { icon: FaDiscord, url: "https://discord.gg/yourtoken" },
    { icon: FaTelegram, url: "https://t.me/yourtoken" },
    { icon: FaCoins, url: "https://www.coingecko.com/en/coins/yourtoken" },
  ];

  return (
    <footer className="Footer" id="CommunitySection">
      <div className="FooterContainer">

        <h3 className="FooterTitle">
          Join the HBADG Community
        </h3>

        <div className="FooterSocials">
          {socials.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="FooterIcon"
                onClick={() => window.open(item.url, "_blank")}
              >
                <Icon />
              </div>
            );
          })}
        </div>

        <button
          className="FooterButton"
          onClick={() =>
            window.open(
              "https://pancakeswap.finance/swap?outputCurrency=YOUR_CONTRACT_ADDRESS",
              "_blank"
            )
          }
        >
          Buy HBADG
        </button>

        <p className="FooterCopy">
          © {new Date().getFullYear()} CowrieProtocol. All rights reserved.
        </p>

      </div>
    </footer>
  );
}