import { useState } from "react";
import "./styles/navbar.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false); // close sidebar after click
  };

  return (
    <>
      {/* TOP NAV */}
      <div className="Nav" id="NavSection">
        <button className="openbtn" onClick={() => setOpen(true)}>
          ☰
        </button>

        <div className="brand">
          <img
            src={`${process.env.PUBLIC_URL}/images/MainLogo.PNG`}
            alt="logo"
          />
          <h3>HBadger</h3>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#InfoSections">About</a>
          </li>
          <li>
            <a href="#TokenomicsSection">Tokenomics</a>
          </li>
          <li>
            <a href="#RoadmapSection">Roadmap</a>
          </li>
          <li>
            <a href="#CommunitySection">Community</a>
          </li>
          <li>
            <a href="#" className="cta">
              Buy
            </a>
          </li>
        </ul>
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <button className="closebtn" onClick={() => setOpen(false)}>
          ×
        </button>

        <a href="#InfoSections" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#TokenomicsSection" onClick={() => setOpen(false)}>
          Tokenomics
        </a>
        <a href="#RoadmapSection" onClick={() => setOpen(false)}>
          Roadmap
        </a>
        <a href="#CommunitySection" onClick={() => setOpen(false)}>
          Community
        </a>
        <a href="#" onClick={() => setOpen(false)}>
          Buy
        </a>
      </div>
    </>
  );
}
