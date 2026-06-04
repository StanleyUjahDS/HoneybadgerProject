import "./styles.css";
import CardOne from "./CardType1";

export default function Info() {
  return (
    <section className="Info" id="InfoSections">

      {/* LEFT: CORE EXPLANATION */}
      <div className="InfoCard">
        <h1>What is Hbadger?</h1>

        <p>
          Hbadger is a utility-driven crypto protocol focused on
          governance, participation, and long-term ecosystem design.
        </p>

        <p>
          Instead of short-term speculation, it prioritizes structured
          incentives and active holder involvement.
        </p>

        <ul>
          <li>On-chain governance through community participation</li>
          <li>Utility-based rewards aligned with engagement</li>
          <li>Economic design built for long-term cycles</li>
        </ul>

        <div className="CardDetails">
          <CardOne
            link={`${process.env.PUBLIC_URL}/images/StarHbadger.png`}
            title="Strong"
            text="Built to remain stable through volatility."
          />
          <CardOne
            link={`${process.env.PUBLIC_URL}/images/LikeHbadger.png`}
            title="Fearless"
            text="Designed for conviction, not reaction."
          />
          <CardOne
            link={`${process.env.PUBLIC_URL}/images/FighterHead.png`}
            title="Relentless"
            text="Always moving forward, regardless of conditions."
          />
        </div>
      </div>

      {/* RIGHT: PHILOSOPHY BLOCK */}
      <div className="InfoText glass-card">

        <div className="InfOne">
          <h2>Our Stance</h2>

          <p>
            Crypto is shifting toward utility, governance, and sustainability.
          </p>

          <p>
            Hbadger is built for that shift — focusing on systems that last,
            not cycles that fade.
          </p>

          <p>
            We don’t follow momentum. We build resilience.
          </p>
        </div>

        <div className="InfTwo">
          <img
            src={`${process.env.PUBLIC_URL}/images/FInaleTorch.png`}
            alt="Hbadger torch"
          />
        </div>

        <div className="InfThree">
          <img src={`${process.env.PUBLIC_URL}/images/ResilientHbadger.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/images/Secure Hbadger.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/images/dontstopme.png`} alt="" />
        </div>

      </div>
    </section>
  );
}