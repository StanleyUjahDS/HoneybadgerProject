import { FaX } from "react-icons/fa6";
import "./styles/footer.css";
import { FaTwitter, FaDiscord, FaTelegram, FaCoins, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { icon: FaX, url: "https://x.com/hbadger_token" },
    { icon: FaWhatsapp, url: "https://chat.whatsapp.com/HFYyl8sEvLi2hhM1RlMxu2" },
    { icon: FaTelegram, url: "https://t.me/hbadger_cryptocurrency_channel" },
    { icon: FaCoins, url: "https://www.cowrieprotocol.com" },
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