import "./styles/roadmap.css";

const phases = [
  {
    tag: "Fearless",
    title: "Claim Territory",
    items: [
      "HBAD token launch",
      "Genesis NFT mint",
      "Early holders onboarded",
    ],
  },
  {
    tag: "Relentless",
    title: "Dig In",
    items: [
      "Staking system goes live",
      "Lock rewards activated",
      "Holder incentives begin",
    ],
  },
  {
    tag: "Strong",
    title: "Take Control",
    items: [
      "Governance activated",
      "Treasury formation",
      "Community voting system",
    ],
  },
  {
    tag: "Bold",
    title: "Expand the Den",
    items: [
      "NFT marketplace launch",
      "Ecosystem expansion",
      "Utility integrations",
    ],
  },
  {
    tag: "Untamed",
    title: "Don’t Die",
    items: [
      "DAO control transition",
      "Emissions reduction",
      "Long-term survival mode",
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