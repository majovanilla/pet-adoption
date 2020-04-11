import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Navbar from './Navbar';
import DetailsPage from './details/DetailsPage';
import MainPage from './main/MainPage';
import Contact from './main/Contact';
import Categories from './main/Categories';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/:id" component={DetailsPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
