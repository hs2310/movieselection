import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Login from "./components/Login";
import List from "./components/List";
import Movie from "./components/Movie";
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
        <Route path = "/">
          <Login/>
        </Route>
        <Route  path = "/list">
          <List/>
        </Route>
        <Route path = "/movies">
          <Movie/>
        </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
