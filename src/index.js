import React from 'react';
import ReactDOM from 'react-dom';
import { createstore, applyMiddleware } from 'redux'; //need to set up store
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'; //this wraps our app and gives it access to store
import App from './App';


//set up store means we need to import


ReactDOM.render(<App />, document.getElementById('root'));