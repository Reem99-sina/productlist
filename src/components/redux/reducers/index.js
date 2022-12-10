import { combineReducers } from "redux";
import { productReducer, selectProductReducer, searchProducts, counter, cart } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectProductReducer,
    products: searchProducts,
    counter: counter,
    addcart: cart
})
export default reducers