import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Navbar from './Navbar';
import DetailsPage from './details/DetailsPage';
import MainPage from './main/MainPage';
import Contact from './menu/Contact';
import Categories from './menu/Categories';
import Catch404 from './menu/Catch404';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/details/:id" component={DetailsPage} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Catch404} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
