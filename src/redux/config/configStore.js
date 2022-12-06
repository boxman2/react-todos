import { createStore } from "redux";
import { combineReducers } from "redux";
import { e } from "../modules/todos";

const rootReducer = combineReducers({
  todos: e,
});
const store = createStore(rootReducer);

export default store;
