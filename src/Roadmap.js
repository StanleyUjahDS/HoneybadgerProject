import "./styles.css";
import CardTwo from "./CardType2";

export default function Hero() {
  return (
    <div className="InfoRoadMap" id="RoadmapSection">
      <h1>ROADMAP</h1>

      <div className="Roadmap">
        {/* Phase I */}
        <CardTwo
          SmallHeader="Fearless"
          Bigheader="Claim Territory"
          text={
            <>
              <ul>
                <li>HBAD token launch</li>
                <li>Genesis Utility NFT mint (limited supply)</li>
                <li>Early holders set the core</li>
              </ul>
              <p><em>STAKE YOUR GROUND</em></p>
            </>
          }
        />

        {/* Phase II */}
        <CardTwo
          SmallHeader="Relentless"
          Bigheader="Dig In"
          text={
            <>
              <ul>
                <li>HBAD staking goes live</li>
                <li>Lock up for power</li>
                <li>Rewards for the relentless</li>
              </ul>
              <p><em>STRONG HANDS ONLY</em></p>
            </>
          }
        />

        {/* Phase III */}
        <CardTwo
          SmallHeader="Strong"
          Bigheader="Take Control"
          text={
            <>
              <ul>
                <li>Governance system activates</li>
                <li>Treasury formation</li>
                <li>Holders call the shots</li>
              </ul>
              <p><em>THOSE WHO COMMIT DECIDE</em></p>
            </>
          }
        />

        {/* Phase IV */}
        <CardTwo
          SmallHeader="Bold"
          Bigheader="Expand the Den"
          text={
            <>
              <ul>
                <li>Native Hbadger NFT marketplace launch</li>
                <li>HBAD-only economy</li>
                <li>New utility NFT drops</li>
              </ul>
              <p><em>BUILD THE ECOSYSTEM</em></p>
            </>
          }
        />

        {/* Phase V */}
        <CardTwo
          SmallHeader="Untamed"
          Bigheader="Don't Die"
          text={
            <>
              <ul>
                <li>DAO takes control</li>
                <li>Emissions tighten</li>
                <li>Adapt and survive</li>
              </ul>
              <p><em>SURVIVAL IS THE STRATEGY</em></p>
            </>
          }
        />

        {/* Milestone Images */}
        <div className="Milestone-Container">
          <img
            src={`${process.env.PUBLIC_URL}/images/BEgining.png`}
            alt="Phase I milestone"
            className="Milestone-marker"
            style={{ top: "5%" }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/Digging.png`}
            alt="Phase II milestone"
            className="Milestone-marker"
            style={{ top: "25%" }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/Trap.png`}
            alt="Phase III milestone"
            className="Milestone-marker"
            style={{ top: "45%" }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/HoneyBadgerBag.png`}
            alt="Phase IV milestone"
            className="Milestone-marker"
            style={{ top: "65%" }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/logoHoneyBadger.png`}
            alt="Phase V milestone"
            className="Milestone-marker"
            style={{ top: "85%" }}
          />
        </div>
      </div>
    </div>
  );
}
