import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

import './App.css';

const PageBlog = Loadable({
  loader: ()=>import('./pages/Blog'),
  loading: Loading
});

const PageIndex = Loadable({
  loader: ()=>import('./pages/Index'),
  loading: Loading
});

const PageDetails = Loadable({
  loader: ()=>import('./pages/Details'),
  loading: Loading
});

const PageApi = Loadable({
  loader: ()=>import('./pages/Api'),
  loading: Loading
});

const PageAbout = Loadable({
  loader: ()=>import('./pages/About'),
  loading: Loading
});


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/api" component={PageApi}/>
            <Route path="/blog" component={PageBlog}/>
            <Route path="/about" component={PageAbout}/>
            <Route path="/lib-details/:id" component={PageDetails}/>
            <Route exact path="/:all" component={PageIndex}/>
            <Route exact path="/" component={PageIndex}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
