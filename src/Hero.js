import "./styles.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Fearless By Nature</h1>
        <h1>Unstoppable Onchain</h1>
        <h3>
          Built for resilience, governed by conviction, and designed to thrive across every market cycle.
        </h3>
        <div className="hero_button">
          <button>Learn More</button>
          <button>Read ☰</button>
        </div>
      </div>

      <div className="hero-image blob">
        <img
          src={`${process.env.PUBLIC_URL}/images/NewHbadger.png`}
          alt="Honey Badger"
        />
      </div>
    </div>
  );
}
