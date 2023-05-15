import React from 'react';
import { HashRouter, Route,Switch } from "react-router-dom";
import Login from '../Login';
import Index from '../Index';
const HomePage = () => {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Index} />
          <Route path="/" component={Index} />
          
          {/* <Route path="/messageChart" component={MessageChart} /> */}
        </Switch>
      </HashRouter>
    );
}

export default HomePage;
