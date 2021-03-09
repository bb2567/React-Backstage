import { applyMiddleware, createStore } from "redux";
import  rootReducer  from "./Reducer/Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, {}, applyMiddleware(thunk),);

export default store;
 