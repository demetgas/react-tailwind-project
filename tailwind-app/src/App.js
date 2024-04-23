import "./App.css";
import { Cats } from "./components/Cats";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Cats />
      </header>
    </div>
  );
}

export default App;
