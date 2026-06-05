import "./styles/roadmap.css";

const phases = [
  {
    title: "Phase 1 — Genesis Deployment",
    tag: "Launch",
    items: [
      "Deploy $HBADG on BNB Smart Chain (BEP-20)",
      "Mint fixed supply: 10,000,000,000 tokens",
      "Create initial liquidity pool on DEX",
      "Establish community identity (Badgers)",
    ],
  },
  {
    title: "Phase 2 — Activation & Decentralization",
    tag: "Immutable",
    items: [
      "Trading enabled across DEX markets",
      "Liquidity stabilisation phase",
      "Ownership renounced",
      "No admin control or blacklist functions",
      "Contract becomes fully immutable",
    ],
  },
  {
    title: "Phase 3 — Ecosystem Foundations",
    tag: "Foundation",
    items: [
      "Begin ecosystem usage for $HBADG",
      "Enable transactional flow across applications",
      "Burn mechanism and treasury accumulation",
      "Swap mechanism (HBADG → USDT) initiated",
    ],
  },
  {
    title: "Phase 4 — Platform Integrations",
    tag: "Integration",
    items: [
      "Builders Oasis integration rollout",
      "Griot platform integration rollout",
      "Access-based services introduced",
      "Early ecosystem application adoption",
    ],
  },
  {
    title: "Phase 5 — Expansion Phase",
    tag: "Growth",
    items: [
      "Scale ecosystem-wide usage",
      "Expand payment adoption across tools",
      "Strengthen treasury-driven development",
      "Community reward mechanisms expansion",
    ],
  },
  {
    title: "Phase 6 — RWA Ecosystem Layer",
    tag: "RWA",
    items: [
      "Integration into Cowrie RWA tokenization ecosystem",
      "Real-world asset linking via ecosystem tools",
      "Cross-platform utility expansion",
      "$HBADG becomes transactional layer for RWA interactions",
      "Global ecosystem interoperability phase",
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="RoadmapSection" id="RoadmapSection">
      <h1 className="RoadmapTitle">ROADMAP</h1>

      <div className="RoadmapTrack">
        {phases.map((phase, i) => (
          <div className="RoadmapStep" key={i}>
            <div className="RoadmapDot" />

            <div className="RoadmapCard">
              <span className="RoadmapTag">{phase.tag}</span>
              <h2>{phase.title}</h2>

              <ul>
                {phase.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}