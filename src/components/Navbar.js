import React, {useState} from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    return (
      <React.Fragment>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              Learnevate <i className="fab fa-typo3" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </div>
          <ul className={click ? "nav-menu action" : "nav-menu"} >
            <li className="nav-item">
              <Link to="/" 
              className="nav-links" 
              onClick={closeMobileMenu}
              >
                Home    
              </Link>
            </li>    
            <li className="nav-item">
              <Link to="/services" 
              className="nav-links" 
              onClick={closeMobileMenu}
              >
                Services     
              </Link>
            </li>    
            <li className="nav-item">
              <Link to="/contact" 
              className="nav-links" 
              onClick={closeMobileMenu}
              >
                Contact  
              </Link>
            </li>    
            <li className="nav-item">
              <Link to="/sign-up" 
              className="nav-links-mobile" 
              onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>    
          </ul>
        </nav>        
      </React.Fragment>
    )
}

export default Navbar
