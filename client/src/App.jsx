import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurSolution from './pages/OurSolution';
import AboutUs from './pages/AboutUs';
import AccessibilityConfiguration from './pages/AccessibilityConfiguration';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-solution" element={<OurSolution />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/accessibility" element={<AccessibilityConfiguration />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
