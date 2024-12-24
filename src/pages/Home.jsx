import React from 'react';
import Header from '../Components/Header'; // Correct import
import Footer from '../Components/Footer'; // Correct import

function Home() {
  return (
    <div className="home">
      <main>
        <h2>Welcome to the Home Page</h2>
        <p>This is a basic landing page for the Grimoire site.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
