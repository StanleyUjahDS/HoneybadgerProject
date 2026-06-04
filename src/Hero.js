import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles/hero.css";

export default function Hero() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(textRef.current.children, {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    });

    tl.from(
      imageRef.current,
      {
        scale: 0.8,
        opacity: 0,
        duration: 1,
      },
      "-=0.6"
    );
  }, []);

  return (
    <div className="hero">
      <div className="hero-text" ref={textRef}>
        <h1>Fearless By Nature</h1>
        <h1>Unstoppable Onchain</h1>

        <h3>
          Built for resilience, governed by conviction, and designed to thrive
          across every market cycle.
        </h3>

        <div className="hero_button">
          <button>Learn More</button>
          <button>Read ☰</button>
        </div>
      </div>

      <div className="hero-image blob">
  <video
    className="hero-video"
    autoPlay
    loop
    muted
    playsInline
  >
    <source
      src={`${process.env.PUBLIC_URL}/images/hbadger.mp4`}
      type="video/mp4"
    />
  </video>
</div>
    </div>
  );
}