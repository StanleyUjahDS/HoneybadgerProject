import "./styles.css";
import CardOne from "./CardType1";
import CardTwo from "./CardType2";

export default function Info() {
  return (
    <div className="Info" id="InfoSections">
      <div className="InfoCard">
        <h1>What is Hbadger?</h1>
        <p>
          <strong>Hbadger is a utility and governance protocol built for long-term resilience.</strong> 
          It is designed for participants who want more than speculation — those who value ownership, accountability, and systems that hold up under pressure.
        </p>
        <p>At its core, Hbadger enables:</p>
        <ul>
          <li><strong>On-chain governance</strong> powered by active participation</li>
          <li><strong>Utility-driven incentives</strong> that reward commitment, not hype</li>
          <li><strong>A resilient economic design</strong> built to function across market cycles</li>
        </ul>
        <p>Hbadger prioritizes disciplined growth over short-term noise, aligning holders, builders, and the ecosystem through transparent rules and sustainable mechanics.</p>
        <p><strong>This is a protocol for people who stay engaged, stake their position, and help shape the future — not just watch it.</strong></p>

        <div className="CardDetails">
          <CardOne
            link={`${process.env.PUBLIC_URL}/images/StarHbadger.png`}
            title="Strong"
            text="Built to endure volatility and remain functional when conditions are hardest."
          />
          <CardOne
            link={`${process.env.PUBLIC_URL}/images/LikeHbadger.png`}
            title="Fearless"
            text="Built for those who don’t flinch when markets test conviction."
          />
          <CardOne
            link={`${process.env.PUBLIC_URL}/images/FighterHead.png`}
            title="Relentless"
            text="Built to keep moving forward; no matter the environment."
          />
        </div>
      </div>

      <div className="InfoText glass-card">
        <div className="InfOne">
          <h2>Our Stance</h2>
          <p>We believe the future of crypto will be defined by <strong>utility, governance, and resilience</strong> — not speculation alone.</p>
          <p>Hbadger is part of that next wave: on-chain systems designed to last, communities built around ownership, and protocols that reward long-term participation over short-term momentum.</p>
          <p>We’re not here to chase trends. We’re here to build what survives them.</p>
        </div>
        <div className="InfTwo">
          <img src={`${process.env.PUBLIC_URL}/images/FInaleTorch.png`} alt="" />
        </div>

        <div className="InfThree">
          <img src={`${process.env.PUBLIC_URL}/images/ResilientHbadger.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/images/Secure Hbadger.png`} alt="" />
          <img src={`${process.env.PUBLIC_URL}/images/dontstopme.png`} alt="" />
        </div>
      </div>
    </div>
  );
}
