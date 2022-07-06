import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Home() {
  return (
    <>
      <nav>
        <Link to="/quotes">Qoutes</Link>
        <Link to="/calculate">Calculate</Link>
      </nav>
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Archite
        </p>
      </main>

    </>
  );
}

export default Home;
