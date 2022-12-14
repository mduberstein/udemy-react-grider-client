import {combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers ({
  auth: authReducer,
  // form is the precise name of the key required by redux-form lib
  form: formReducer,
  streams: streamReducer
});