import "./styles/partners.css";
import { FaHandshake } from "react-icons/fa";

const partners = [
  { name: "BNB Chain", url: "https://www.bnbchain.org" },
  { name: "PancakeSwap", url: "https://pancakeswap.finance" },

];

export default function Partners() {
  return (
    <section className="PartnersSection" id="PartnersSection">
      <h2 className="PartnersTitle">Fundamental Partners</h2>

      <div className="PartnersGrid">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="PartnerCard"
            onClick={() => window.open(partner.url, "_blank")}
          >
            <FaHandshake className="PartnerIcon" />
            <span className="PartnerName">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}