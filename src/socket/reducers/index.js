import {combineReducers} from "redux";
import categories from "./categories";
import products from "./products";
import filters from "./filters";

export default combineReducers({
    categories,
    products,
    filters
});
