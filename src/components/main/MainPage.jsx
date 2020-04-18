import React from 'react';
import SearchBar from '../../containers/SearchBar';
import PetList from '../../containers/PetList';

const MainPage = () => (
  <div className="MainPage container-fluid">
    <SearchBar />
    <PetList />
  </div>
);

export default MainPage;
