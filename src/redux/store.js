import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducers from './reducers';

const win = window;

const middleware = process.env.NODE_ENV !=='produciton' ? [require('redux-immutable-state-invariant').default()] : [];
const storeEnhancers = compose(applyMiddleware(...middleware), (win && win.devToolsExtension) ? win.devToolsExtension() : f => f);

let store = createStore(reducers,{},storeEnhancers);
console.log(store.getState());

export default store;