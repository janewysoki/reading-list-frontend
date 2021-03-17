import React from 'react';
import ReactDOM from 'react-dom';
import { createstore, applyMiddleware, compose } from 'redux'; //need to set up store; compose combines different middlewares into 1 so we only have to pass one middleware into createStore
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'; //this wraps our app and gives it access to store
import App from './App';


let reducer = ''

//this is basically saying compose enhances equals these dev tools or equals compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))



//below we wrap App with Provider so that the store is global to any component we create?
//any child of our App component will have access to the store that we have to pass into provider
ReactDOM.render(
<Provider >
  <App />
</Provider>
, 

document.getElementById('root'));