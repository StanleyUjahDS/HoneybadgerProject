import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Hero from "./Hero";
import Nav from "./Nav";
import Info from "./Info";
import InfoRoadMap from "./Roadmap";
import Tokenomic from "./Tokenomics";
import Footer from "./Community";
import TokenPlatforms from "./listings";
import Partners from "./partners";

// Correct CSS imports
import "./styles/base.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/cards.css";
import "./styles/info.css";
import "./styles/roadmap.css";
import "./styles/tokenomics.css";
//import "./styles/responsive.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Nav />
    <Hero />
    <Info />
    <Tokenomic />
    <TokenPlatforms />
    <InfoRoadMap />
    <Partners />
    <Footer />
  </StrictMode>
);
