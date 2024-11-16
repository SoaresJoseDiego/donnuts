import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Testemonial from './Components/Testemonial';
import Work from './Components/Work';

function App() {
  return (
    <div className="App">
      <Home/>
      <About />
      <Work />
      <Testemonial/>
      <Contact/>
    </div>
  );
}

export default App;
