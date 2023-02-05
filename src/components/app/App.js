import './App.css';
import Navbar from "../nav/Navbar";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;
