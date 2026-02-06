import "./styles.css";
import { FaCheck } from "react-icons/fa";

// Corresponding colors to the 3D pie chart slices
const sliceColors = [
  "#b28e23", // 30% Community & Ecosystem
  "#0056b3", // 30% Liquidity & Staking
  "#1f6e3a", // 15% Development
  "#4b2e7c", // 10% Team (Vested)
  "#c55b00", // 10% Treasury & DAO
  "#a71d2a", // 5% Marketing
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
      <h3>
        <span style={iconBg(sliceColors[0])}>
          <FaCheck color="white" size={12} />
        </span>
        30% Community & Ecosystem
      </h3>

      <h3>
        <span style={iconBg(sliceColors[1])}>
          <FaCheck color="white" size={12} />
        </span>
        30% Liquidity & Staking
      </h3>

      <h3>
        <span style={iconBg(sliceColors[2])}>
          <FaCheck color="white" size={12} />
        </span>
        15% Development
      </h3>

      <h3>
        <span style={iconBg(sliceColors[3])}>
          <FaCheck color="white" size={12} />
        </span>
        10% Team (Vested)
      </h3>

      <h3>
        <span style={iconBg(sliceColors[4])}>
          <FaCheck color="white" size={12} />
        </span>
        10% Treasury & DAO
      </h3>

      <h3>
        <span style={iconBg(sliceColors[5])}>
          <FaCheck color="white" size={12} />
        </span>
        5% Marketing
      </h3>
    </div>
  );
}
