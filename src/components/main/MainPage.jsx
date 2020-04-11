import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import SearchBar from './SearchBar';
import PetList from './PetList';

const MainPage = () => (
  <BrowserRouter>
    <div className="MainPage">
      <SearchBar />
      <PetList />
    </div>
  </BrowserRouter>
);

export default MainPage;
