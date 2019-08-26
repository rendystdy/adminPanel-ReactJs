import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-primary'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            {/* <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                PANEL ADMIN
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/product" className="nav-link">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/total-order" className="nav-link">
                Total Order
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
