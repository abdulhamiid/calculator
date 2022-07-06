import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Quotes() {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/quotes">Qoutes</Link>
        <Link to="/calculator">Calculator</Link>
      </nav>
      <main>
        <h2>Quote</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Arcntur totam.
        </p>
      </main>
    </>
  );
}

export default Quotes;
