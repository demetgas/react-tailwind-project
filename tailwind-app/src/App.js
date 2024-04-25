import "./App.css";
import { Cats } from "./components/Cats";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Info } from "./components/Info";
import { Intro } from "./components/Intro";
import { Message } from "./components/Message";
import { Navbar } from "./components/Navbar";
import { ReadMore } from "./components/ReadMore";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
        <Cats />
        <Intro />
        <ReadMore />
        <Info />
        <Gallery />
        <Message />
        <Footer />
      </header>
    </div>
  );
}

export default App;
