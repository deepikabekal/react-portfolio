import {useState} from 'react';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";


function App() {
  const [sections] = useState(['About', 'Portfolio', 'Contact', 'Resume']);
  const [currentSection, setCurrentSection] = useState (sections[0]);

  return (
    <>
      <header>
        <Nav 
          sections = {sections}
          setCurrentSection = {setCurrentSection}
          currentSection = {currentSection}
        >
        </Nav>
      </header>
      <main>
        <Contact></Contact>
      
      </main>     
      
      <footer>
        <Footer />
      </footer>
      
    </>
  );
}

export default App;
