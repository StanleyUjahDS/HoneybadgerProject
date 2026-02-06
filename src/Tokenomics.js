import "./styles.css";
import CardThree from "./CardType3";
import CardFour from "./CardType4";
import TokenAllocation from "./Distribution"; 
import Tokenomics3D from "./TokenomicsChart";
import { FaTools, FaWater, FaBullhorn, FaWallet } from "react-icons/fa";

const iconStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "10px",
};

export default function Tokenomic() {
  return (
    <div className="Tokenomics " id="TokenomicsSection">
      <div className="Tokenomics-header">
        <hr/>
        <h1>TOKEN OVERVIEW</h1>
        <hr/>
      </div>
      <div className="Tokenomics-content">
        <CardThree text="Token Name" title="Hbadger (H 4 Honey)" />
        <CardThree text="Ticker" title="HBADG (Badge)" />
        <CardThree text="Total Supply" title="$1,000,000,000" />
        <CardThree text="Supply Type" title="Fixed Supply-No Minting" />
       
      </div>
      <div className="Tokenomics-header">
        <hr/>
        <h1>TOKEN DISTRIBUTION</h1>
        <hr/>
      </div>

      <div className="Distribution-content">
              <Tokenomics3D />
              <TokenAllocation />
      </div>  
      
      <div className="Tokenomics-header">
        <hr/>
        <h1>TOKEN UTILITIES</h1>
        <hr/>
      </div>

      <div className="Utility-content">
        <CardFour link="/images/Reward.png" title="Staking Rewards" text="Boost, Earn, Dominate" />
        <CardFour link="/images/Governace.png" title="Governance Voting" text="Decisions by the commited" />
        <CardFour link="/images/Nft.png" title="NFT Utility" text="Mint & power up NFTs" />
        <CardFour link="/images/Marketplace.png" title="Marketplace Currency" text="Fuel the ecosystem " />

      </div>
         <div className="Tokenomics-header" >
        <hr/>
        <h1>Transaction Tax</h1>
        <hr/>
      </div>
      <div className="Transaction-tax Tokenomics-header">

       <hr/>
        <div className="tax-info "> 2% BUY / 2% SELL</div>
        <hr/>
         </div>

         <div className="Tax-distribution ">

                <h2>
        <span style={iconStyle}>
          <FaTools color="#b28e23" size={20} />
        </span>
        1% Development
      </h2>

      <h2>
        <span style={iconStyle}>
          <FaWater color="#0056b3" size={20} />
        </span>
        0.5% Liquidity
      </h2>

      <h2>
        <span style={iconStyle}>
          <FaBullhorn color="#a71d2a" size={20} />
        </span>
        0.3% Marketing
      </h2>

      <h2>
        <span style={iconStyle}>
          <FaWallet color="#4b2e7c" size={20} />
        </span>
        0.2% Treasury
      </h2>

         </div>
    </div>

  );
}