// redux/index.js
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/characterReducer'; // Crea este archivo según tus necesidades

const middleware = [thunkMiddleware];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
