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
  
  function renderSection () {

    switch (currentSection) {
      case 'About' : 
        return <About />;
      case 'Portfolio' : 
        return <Portfolio />
      case 'Contact' : 
        return <Contact />
      case 'Resume' :
          return <Resume />
      default :
        return <About />

    }
  }

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
        {renderSection()}      
      </main>     
      
      <footer>
        <Footer />
      </footer>
      
    </>
  );
}

export default App;
