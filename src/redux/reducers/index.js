import { combineReducrs } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducrs({
  allProducts: productReducer,
});
