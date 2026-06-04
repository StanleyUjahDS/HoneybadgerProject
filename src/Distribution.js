import "./styles/distribution.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const allocations = [
  { label: "Presale", percent: 25 },
  { label: "Liquidity", percent: 20 },
  { label: "Development", percent: 15 },
  { label: "Burn (Initial)", percent: 10 },
  { label: "Treasury", percent: 10 },
  { label: "Team (Locked)", percent: 5 },
  { label: "Listings", percent: 5 },
  { label: "Marketing", percent: 5 },
  { label: "Ecosystem / Rewards", percent: 5 },
];

export default function TokenAllocation() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(".allocation-row", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".allocation-fill", {
      width: 0,
      duration: 1.5,
      stagger: 0.08,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  return (
    <div className="TokenAllocation" ref={sectionRef}>
      <div className="AllocationHeader">
        <h2>Token Allocation</h2>

        <p>
          Fixed supply model built for sustainability and long-term growth.
        </p>
      </div>

      <div className="AllocationBars">
        {allocations.map((item) => (
          <div className="allocation-row" key={item.label}>
            <div className="allocation-top">
              <span>{item.label}</span>
              <span>{item.percent}%</span>
            </div>

            <div className="allocation-track">
              <div
                className="allocation-fill"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="AllocationStats">
        <div className="stat-card">
          <h3>10B</h3>
          <span>Total Supply</span>
        </div>

        <div className="stat-card">
          <h3>Fixed</h3>
          <span>Supply Model</span>
        </div>

        <div className="stat-card">
          <h3>0%</h3>
          <span>Mint Function</span>
        </div>
      </div>
    </div>
  );
}