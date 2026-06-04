import "./styles/tokenomics.css";
import CardThree from "./CardType3";
import TokenAllocation from "./Distribution";

import {
  FaFire,
  FaWater,
  FaBullhorn,
  FaLock
} from "react-icons/fa";

const iconStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "10px",
};

export default function Tokenomic() {
  return (
    <div className="Tokenomics" id="TokenomicsSection">

      {/* TOKEN OVERVIEW */}

      <div className="Tokenomics-header">
        <hr />
        <h1>TOKEN OVERVIEW</h1>
        <hr />
      </div>

      <div className="Tokenomics-content">
        <CardThree text="Token Name" title="Hbadger" />
        <CardThree text="Ticker" title="HBADG" />
        <CardThree text="Total Supply" title="10,000,000,000" />
        <CardThree text="Supply Type" title="Fixed Supply • No Minting" />
      </div>

      {/* DISTRIBUTION */}

      <div className="Tokenomics-header">
        <hr />
        <h1>TOKEN DISTRIBUTION</h1>
        <hr />
      </div>

      <div className="Distribution-content">
  <TokenAllocation />
</div>

      {/* TOKEN FEATURES */}

      <div className="Tokenomics-header">
        <hr />
        <h1>TOKEN FEATURES</h1>
        <hr />
      </div>

      <div className="Utility-content">

        <CardThree
          text="Liquidity"
          title="20% Initial Liquidity"
        />

        <CardThree
          text="LP Status"
          title="Liquidity Burned"
        />

        <CardThree
          text="Burn Model"
          title="True Supply Reduction"
        />

        <CardThree
          text="Ownership"
          title="Renounce Planned"
        />

      </div>

      {/* TAX */}

      <div className="Tokenomics-header">
        <hr />
        <h1>TRANSACTION TAX</h1>
        <hr />
      </div>

      <div className="Transaction-tax Tokenomics-header">
        <hr />
        <div className="tax-info">
          1.8% BUY / 1.8% SELL
        </div>
        <hr />
      </div>

      <div className="Tax-distribution">

        <h2>
          <span style={iconStyle}>
            <FaBullhorn color="#b28e23" size={20} />
          </span>
          1.0% Marketing
        </h2>

        <h2>
          <span style={iconStyle}>
            <FaWater color="#0056b3" size={20} />
          </span>
          0.5% Auto Liquidity
        </h2>

        <h2>
          <span style={iconStyle}>
            <FaFire color="#a71d2a" size={20} />
          </span>
          0.3% True Burn
        </h2>

        <h2>
          <span style={iconStyle}>
            <FaLock color="#4b2e7c" size={20} />
          </span>
          LP Tokens Burned
        </h2>

      </div>

    </div>
  );
}
