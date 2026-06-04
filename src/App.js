import "./styles/base.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/cards.css";
import "./styles/info.css";
import "./styles/roadmap.css";
import "./styles/tokenomics.css";
import "./styles/responsive.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Roadmap />
      <Tokenomics />
    </>
  );
}

export default App;
