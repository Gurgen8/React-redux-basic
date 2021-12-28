import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from "./store/index"

const initialState={
  cash:0
}

const reducer=(state=initialState,action)=>{
  switch(action.type){
    case "ADD_CASH":

    return {...state,cash:state.cash+action.payload}

    case "GET_CASH":

      return {...state,cash:state.cash-action.payload}

  default:
  return state}

}


const costumReducer=(state=initialState,action)=>{
  switch(action.type){
    case "ADD_COSTUMER":

    return {...state,cash:state.cash+action.payload}

    case "GET_COSTUMER":

      return {...state,cash:state.cash-action.payload}

  default:
  return state}

}





ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>
   ,
  document.getElementById('root')
);