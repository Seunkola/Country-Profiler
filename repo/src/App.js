import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Countries from './components/Countries';

function App() {
  return (
    <div className="App">
       <div className="view">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/countries" component={Countries} />
            <Route exact path="/countries/:code" component={Countries} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
