import logo from "./logo.svg";
import Header from "./components/Header";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Roadmap from "./components/Roadmap";
import GameMechanics from "./components/GameMechanics";
import Teams from "./components/Teams";
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
    </div>
  );
}

export default App;
