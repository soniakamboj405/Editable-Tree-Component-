import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { description } from "../reducers/description";

/**
 * Redus store configration 
 * create store and combine all reducers
 */
export default function configureStore() {
  return createStore(
    combineReducers({
      description,
    }),
    applyMiddleware(
      thunkMiddleware
    )
  );
}
