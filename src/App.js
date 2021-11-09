import logo from "./logo.svg";
import Header from "./components/Header";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Roadmap from "./components/Roadmap";
import GameMechanics from "./components/GameMechanics";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Story />
      <Gallery />
      <Roadmap />
      <GameMechanics />
    </div>
  );
}

export default App;
