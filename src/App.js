import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageIndex from './pages/Index';
import PageDetails from './pages/Details';
import PageBlog from './pages/Blog';
import PageApi from './pages/Api';
import PageAbout from './pages/About';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/lib-details/:id" component={PageDetails} />
          <Route exact path="/api" component={PageApi} />
          <Route exact path="/blog" component={PageBlog} />
          <Route exact path="/about" component={PageAbout} />
          <Route exact path="/" component={PageIndex} />
        </Switch>
      </Router>
    );
  }
}

export default App;
