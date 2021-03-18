import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'; //need to set up store; compose combines different middlewares into 1 so we only have to pass one middleware into createStore
import thunk from 'redux-thunk'; //returns function from action creator which benefits us because____; for when we need to make async reqiests
import { Provider } from 'react-redux'; //this wraps our app and gives it access to store
import readingListReducer from './reducers/readingListReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';


//this is basically saying compose enhances equals these dev tools or equals compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store is where we store data
//reducer tells us what we want to do with our store based on certain actions
//reducer takes in action object and our reducer decides what we want to update about our store and reducer returns new version of store
//every time we see dispatch(actionObj), we want that action object to be sent to this reducer which then updates the value of the store
let store = createStore(readingListReducer, composeEnhancers(applyMiddleware(thunk)))



//below we wrap App with Provider so that the store is global to any component we create?
//any child of our App component will have access to the store that we have to pass into provider
//router gives app and andy child of app access to ruote and setting up links
ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>
, 

document.getElementById('root'));