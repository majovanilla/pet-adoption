import React from 'react';
import MainPage from './main/MainPage';
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="App">
      <nav className="Navbar">
        < Navbar />
      </nav>
      <main>
        < MainPage />
      </main>
    </div>
  );
};

export default App;
