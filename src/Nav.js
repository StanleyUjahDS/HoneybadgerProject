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

  // GSAP entrance animation
  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  // LOCK BODY SCROLL WHEN MENU OPEN
  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <div className="Nav" id="NavSection" ref={navRef}>
        <button className="openbtn" onClick={() => setOpen(true)}>
          ☰
        </button>

        <div className="brand">
          <img
            src={`${process.env.PUBLIC_URL}/images/hbadgerLogo.png`}
            alt="logo"
          />
          <h3>Hbadger</h3>
        </div>

        <ul className="nav-links">
          <li onClick={() => scrollToSection("InfoSections")}>
            <a>About</a>
          </li>
          <li onClick={() => scrollToSection("TokenomicsSection")}>
            <a>Tokenomics</a>
          </li>
          <li onClick={() => scrollToSection("RoadmapSection")}>
            <a>Roadmap</a>
          </li>
          <li onClick={() => scrollToSection("CommunitySection")}>
            <a>Community</a>
          </li>

          <li>
            <a
              className="cta"
              href="https://pancakeswap.finance/"
              target="_blank"
              rel="noreferrer"
            >
              Buy
            </a>
          </li>
        </ul>
      </div>

      {/* OVERLAY (IMPORTANT FIX) */}
      <div
        className={`sidebar-overlay ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <button className="closebtn" onClick={() => setOpen(false)}>
          ×
        </button>

        <a onClick={() => scrollToSection("InfoSections")}>About</a>
        <a onClick={() => scrollToSection("TokenomicsSection")}>Tokenomics</a>
        <a onClick={() => scrollToSection("RoadmapSection")}>Roadmap</a>
        <a onClick={() => scrollToSection("CommunitySection")}>Community</a>

        <a
          href="https://pancakeswap.finance/"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Buy
        </a>
      </div>
    </>
  );
}