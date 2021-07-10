import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
     
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <footer>
        <Footer />
      </footer>
      
    </>
  );
}

export default App;
