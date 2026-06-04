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

      gsap.to(".InfoCard", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.15,
  delay: 0.2,
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
      <div className="InfoIntro">
        <h1>Built for resilience, not speculation.</h1>
        <p>
          Hbadger is a utility-driven protocol focused on long-term participation,
          governance, and sustainable system design.
        </p>
      </div>

      <div className="InfoCards">
        <div className="InfoCard">
          <h2>Utility First</h2>
          <p>Designed to reward real participation, not hype cycles.</p>
        </div>

        <div className="InfoCard">
          <h2>Governed</h2>
          <p>On-chain decisions shaped by active holders.</p>
        </div>

        <div className="InfoCard">
          <h2>Resilient</h2>
          <p>Built to survive volatility, not chase it.</p>
        </div>
      </div>

      <div className="InfoFooter">
        <p>We are not here for trends — we are here for systems that last.</p>
      </div>
    </section>
  );
}
