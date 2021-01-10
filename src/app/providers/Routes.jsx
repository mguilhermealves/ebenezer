import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import Home from '../../pages/dashboard/home/Home';
import Contact from '../../pages/dashboard/contact/Contact';

export default function Routes() {
    return (
      <Router>
        <div>          
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/contact" exact component={Contact}/>
          </Switch>
        </div>
      </Router>
    );
  }