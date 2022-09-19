import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <header>
        <h1>Math Magicians</h1>
      </header>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
