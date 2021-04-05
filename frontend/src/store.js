import { compose, applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { productListReducer } from "./reducers/productReducer"
const initializeState = {}

// put state productList, it will catch by useSelector in HomeScreen.js
// reducer which contains if else or switch case based on state progress
const reducer = combineReducers({
    productList: productListReducer,
})

// to connect redux dev tools with browser
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create storing redux function with return function, default state, and apply-middleware thunk to connect ajax/axios
const store = createStore(
    reducer,
    initializeState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store