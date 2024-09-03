import { createStore, combineReducers } from "redux";
import productsReducer from "../utils/Productreducer"; // Ensure correct path

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default store;
