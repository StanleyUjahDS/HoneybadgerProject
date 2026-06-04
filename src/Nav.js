import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "./styles/navbar.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const navRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  // optional GSAP entrance animation
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <div className="Nav" id="NavSection" ref={navRef}>
        <button className="openbtn" onClick={() => setOpen(true)}>
          ☰
        </button>

        <div className="brand">
          <img src={`${process.env.PUBLIC_URL}/images/MainLogo.PNG`} alt="logo" />
          <h3>Hbadger</h3>
        </div>

        <ul className="nav-links">
          <li><a href="#InfoSections">About</a></li>
          <li><a href="#TokenomicsSection">Tokenomics</a></li>
          <li><a href="#RoadmapSection">Roadmap</a></li>
          <li><a href="#CommunitySection">Community</a></li>
          <li><a href="#" className="cta">Buy</a></li>
        </ul>
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <button className="closebtn" onClick={() => setOpen(false)}>
          ×
        </button>

        <a href="#InfoSections" onClick={() => setOpen(false)}>About</a>
        <a href="#TokenomicsSection" onClick={() => setOpen(false)}>Tokenomics</a>
        <a href="#RoadmapSection" onClick={() => setOpen(false)}>Roadmap</a>
        <a href="#CommunitySection" onClick={() => setOpen(false)}>Community</a>
        <a href="#" onClick={() => setOpen(false)}>Buy</a>
      </div>
    </>
  );
}