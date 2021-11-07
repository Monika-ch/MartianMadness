import logo from "./logo.svg";
import Header from "./components/Header";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Roadmap from "./components/Roadmap";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Story />
      <Gallery />
      <Roadmap />
    </div>
  );
}

export default App;
