import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: [
    ]
}
const count = 0
const cartproduct = {
    products: []
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state
    }
}
export const selectProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}
export const searchProducts = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SEARCH_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state
    }
}

export function counter(prevState = count, action) {
    switch (action.type) {
        case 'INC':
            return prevState + 1;
        case 'DEC':
            return prevState - 1;
        default:
            return prevState
    }
}

export function cart(prevState = cartproduct, { type, payload }) {
    switch (type) {
        case ActionTypes.addcart: {
            return { ...prevState, products: [...prevState.products, payload] }
        }
        case ActionTypes.remove: {
            let data = prevState.products.filter((ele) => { return ele.id !== payload })
            return { ...prevState, products: data }
        }
        default:
            return prevState
    }
}

