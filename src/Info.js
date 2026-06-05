import "./styles/info.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Info() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".InfoIntro", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".InfoMediaCard", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.to(".InfoCard", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".InfoFooter", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="Info" id="InfoSections" ref={sectionRef}>

      {/* HERO SPLIT */}
      <div className="InfoHero">

        {/* LEFT TEXT */}
        <div className="InfoIntro">
          <h1>Built for resilience, not speculation.</h1>

          <p>
            Hbadger is the community that powers Cowrie Protocol, an RWA tokenization
            and DeFi enriching protocol focused on long-term participation,
            governance, and sustainable system design.
          </p>

          <p>
            It acts as the utility and payment layer of the Cowrie ecosystem,
            enabling real usage across applications like Builders Oasis and Griot.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="InfoMediaCard">
          <img
            src={`${process.env.PUBLIC_URL}/images/cowrieLogo.png`}
            alt="Cowrie Protocol"
          />

          <a
            href="https://cowrieprotocol.com"
            target="_blank"
            rel="noreferrer"
            className="InfoButton"
          >
            Explore Cowrie Protocol
          </a>
        </div>

      </div>

      {/* FEATURE CARDS */}
      <div className="InfoCards">
        <div className="InfoCard">
          <h2>Utility First</h2>
          <p>Designed for real ecosystem usage, not hype cycles.</p>
        </div>

        <div className="InfoCard">
          <h2>Governed</h2>
          <p>Decisions shaped by active participants in the ecosystem.</p>
        </div>

        <div className="InfoCard">
          <h2>Resilient</h2>
          <p>Built to survive volatility and sustain long-term growth.</p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="InfoFooter">
        <p>
          “Hbadger is not just a token — it is the currency of participation in the Cowrie ecosystem.”
        </p>
      </div>

    </section>
  );
}