import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-slate-800">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      {/* <Projects></Projects> */}
      <Contact></Contact>
    </div>
  );
}

export default App;
