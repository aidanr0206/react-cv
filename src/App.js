import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-slate-800 snap-y snap-mandatory overflow-scroll">
      <Navbar></Navbar>
      
      <section id="home" className="snap-center">
        <Home></Home>
      </section>

      <section id="about" className="snap-center">
        <About></About>
      </section>

      <section id="skills" className="snap-center">
        <Skills></Skills>
      </section>

      {/* <section id="projects" className="snap-center">
        <Projects></Projects>
      </section> */}

      <section id="contacts" className="snap-center">
        <Contact></Contact>
      </section>
    </div>
  );
}

export default App;
