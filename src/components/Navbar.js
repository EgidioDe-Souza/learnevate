import React, {useState} from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              Learnevate <i className="fab fa-typo3" />
            </Link>
          </div>
        </nav>        
      </React.Fragment>
    )
}

export default Navbar
