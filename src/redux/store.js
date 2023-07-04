import { createStore,applyMiddleware } from "redux";
import  thunk  from 'redux-thunk';
import fetchReducer from "./reducer/fetchReducer";
// import {  } from "redux";

const store = createStore(fetchReducer, applyMiddleware(thunk));
export default store;