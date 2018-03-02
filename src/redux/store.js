import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const win = window;

let middleware = [];
if(process.env.NODE_ENV !=='produciton') {
  middleware.push(require('redux-immutable-state-invariant').default());
}
middleware.push(thunkMiddleware);
const storeEnhancers = compose(applyMiddleware(...middleware), (win && win.devToolsExtension) ? win.devToolsExtension() : f => f);

let store = createStore(reducers,{},storeEnhancers);
console.log(store.getState());

export default store;