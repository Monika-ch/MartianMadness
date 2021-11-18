import logo from "./logo.svg";
import Header from "./components/Header";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Roadmap from "./components/Roadmap";
import GameMechanics from "./components/GameMechanics";
import Teams from "./components/Teams";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Story />
      <Gallery />
      <Roadmap />
      <GameMechanics />
      <Teams />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
