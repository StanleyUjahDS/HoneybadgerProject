import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Hero from "./Hero";
import Nav from "./Nav";
import Info from "./Info";
import InfoRoadMap from "./Roadmap";
import Tokenomic  from "./Tokenomics"
import Footer from "./Community";
import TokenPlatforms from "./listings";
import Partners from "./partners";

import "./styles.css";

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

    <Partners/>
    <Footer />

  </StrictMode>
);
