import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <main className="main-section">
        <h1 id="title">
          Welcome!
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the,
          when an unknown printer took a galley of type and scrambled it to make a type.
          It has survived not only five centuries, but also the leap into electronic ,
          remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type spe.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </main>
    </>
  );
}

export default Home;
