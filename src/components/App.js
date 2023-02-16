import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../styles/App.css';

import VendingMachine from './VendingMachine';
import CocaCola from './CocaCola';
import Lays from "./Lays";
import Snickers from "./Snickers";
import NavBar from './NavBar';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <NavBar />
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/coke'>
          <CocaCola />
        </Route>
        <Route exact path='/lays'>
          <Lays />
        </Route>
        <Route exact path='/snickers'>
          <Snickers />
        </Route>
      </BrowserRouter>
    </main>
  );
}

export default App;
