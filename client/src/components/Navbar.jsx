import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showToolsDropdown, setShowToolsDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowToolsDropdown(!showToolsDropdown);
  };

  const closeDropdown = () => {
    setShowToolsDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          {/* INSERTAR IMAGEN DEL ICONO PRINCIPAL AQUÍ */}
          {/* Ejemplo: <img src="/ruta-a-tu-logo.png" alt="Logo" className="navbar-logo" /> */}
          <Link to="/" className="navbar-logo-placeholder">
            {/* Aquí debes insertar tu imagen del icono principal */}
            Team Bingo
          </Link>
          
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            
            <li className="navbar-item dropdown">
              <button 
                className="navbar-link dropdown-btn"
                onClick={toggleDropdown}
                aria-expanded={showToolsDropdown}
              >
                Tools
                <span className={`dropdown-arrow ${showToolsDropdown ? 'open' : ''}`}>▼</span>
              </button>
              {showToolsDropdown && (
                <div className="dropdown-menu">
                  <Link 
                    to="/our-solution" 
                    className="dropdown-item"
                    onClick={closeDropdown}
                  >
                    Our solution here
                  </Link>
                </div>
              )}
            </li>
            
            <li className="navbar-item">
              <Link to="/about-us" className="navbar-link">About us</Link>
            </li>
          </ul>
        </div>
        
        <div className="navbar-right">
          <Link to="/accessibility" className="navbar-link accessibility-link">
            Accessibility Configuration
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;