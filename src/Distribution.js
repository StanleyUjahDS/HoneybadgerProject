import "./styles/tokenomics.css";
import { FaCheck } from "react-icons/fa";

// Matching colors from the 3D tokenomics chart
const allocations = [
  { label: "Burn (Initial)", percent: "10%", tokens: "1.0B", color: "#e53935" },
  { label: "Presale", percent: "25%", tokens: "2.5B", color: "#b28e23" },
  { label: "Liquidity", percent: "20%", tokens: "2.0B", color: "#0056b3" },
  { label: "Development", percent: "15%", tokens: "1.5B", color: "#7b1fa2" },
  { label: "Team (Locked)", percent: "5%", tokens: "500M", color: "#c55b00" },
  { label: "Listings", percent: "5%", tokens: "500M", color: "#00838f" },
  { label: "Marketing", percent: "5%", tokens: "500M", color: "#43a047" },
  { label: "Ecosystem / Rewards", percent: "5%", tokens: "500M", color: "#6d4c41" },
  { label: "Treasury", percent: "10%", tokens: "1.0B", color: "#37474f" },
];

// Dynamic icon style
const iconBg = (color) => ({
  backgroundColor: color,
  borderRadius: "50%",
  padding: "4px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "8px",
});

export default function TokenAllocation() {
  return (
    <div className="TokenAllocation">
      {allocations.map((item) => (
        <h3 key={item.label}>
          <span style={iconBg(item.color)}>
            <FaCheck color="white" size={12} />
          </span>
          {item.percent} {item.label} ({item.tokens})
        </h3>
      ))}
    </div>
  );
}
