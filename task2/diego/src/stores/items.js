import { createStore } from "redux";
import rootReducer from "../reducers/items";

const store = createStore(rootReducer);

export default store;