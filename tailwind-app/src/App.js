import "./App.css";
import { Cats } from "./components/Cats";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Message } from "./components/Message";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Cats />
        <Message />
        <Gallery />
      </header>
    </div>
  );
}

export default App;
