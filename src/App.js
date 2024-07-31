import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='/services' exact Component={Services}/>
      <Route path='/projects' exact Component={Projects}/>
      <Route path='/contact-me' exact Component={Contact}/>
    
    </Routes>
    </Router>
    </>
  );
}

export default App;
