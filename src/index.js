import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userState from './store/reducers/userState'
import blogReducer from './store/reducers/blogReducer'
import animalReducer from './store/reducers/animalReducer'
import bannerReducer from './store/reducers/bannerReducer'


const rootReducer = combineReducers({
  userState,
  blogReducer,
  animalReducer,
  bannerReducer
})

// @@ Comment first and second and uncomment third before Build
// **********
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
// const store = createStore(rootReducer, applyMiddleware(thunk))
// ******** 

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);