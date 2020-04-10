import React from 'react';
import SearchBar from './main/SearchBar';
import PetList from './main/PetList';
import Navbar from './Navbar';

const App = () => (
  <div className="App">
    <Navbar />
    <SearchBar />
    <PetList />
  </div>
);

export default App;
