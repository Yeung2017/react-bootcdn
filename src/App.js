import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import PageIndex from './pages/Index';
import PageDetails from './pages/Details';
import PageBlog from './pages/Blog';
import PageApi from './pages/Api';
import PageAbout from './pages/About';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/lib-details/:id" component={PageDetails} />
          <Route path="/api" component={PageApi} />
          <Route path="/blog" component={PageBlog} />
          <Route path="/about" component={PageAbout} />
          <Route path="/all" component={PageIndex} />
          <Route exact path="/" component={PageIndex} />
        </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;
