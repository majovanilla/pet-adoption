import React from 'react';
import SearchBar from './SearchBar';
import PetList from './PetList';

const MainPage = () => (
  <div className="MainPage container-fluid">
    <SearchBar />
    <PetList />
  </div>
);

export default MainPage;
