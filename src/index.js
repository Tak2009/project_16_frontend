import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import { verifyCredentials } from './config/redux-token-auth-config'

import { createStore, compose,  applyMiddleware} from "redux"; 
import { Provider } from 'react-redux' //By including the Provider, we'll be able to access our Redux store and/or dispatch actions from any component we want, regardless of where it is on the component tree.
import managePubsSupportersTickets from './2_reducers/ManagePubsSupportersTickets'; // createStore takes the reducer as the argument. This sets the new store's reducer as reducer. When an action is dispatched, it calls the reducer that we passed through when creating the store.
import thunk from "redux-thunk";  //Thunk allows us to return a function inside of our action creator.  Normally, our action creator returns a plain JavaScript object,

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(managePubsSupportersTickets, composeEnhancer(applyMiddleware(thunk)))
// verifyCredentials(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

