import {createStore,combineReducers} from "redux"
import React, { memo } from 'react'
import CostumReducer from "./customReducer"
import CasheReduser from "./cashReducer"
import {composeWithDevTools} from "redux-devtools-extension"

const rootReducer=combineReducers({
    cash:CasheReduser,
    custom:CostumReducer
})

const store=createStore(rootReducer,composeWithDevTools())

export default store
