import { ActionTypes } from "../contants/action-types"
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: product
    }
}
export const removeProductReducer = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}
export const searchProducts = (product) => {
    return {
        type: ActionTypes.SEARCH_PRODUCTS,
        payload: product
    }
}

export function increase() {
    return {
        type: ActionTypes.INC
    }
}
export function decrease() {
    return {
        type: ActionTypes.DEC
    }
}
export function addcart(data) {
    return {
        type: ActionTypes.addcart,
        payload: data
    }
}
export function deletecart(data) {
    return {
        type: ActionTypes.remove,
        payload: data
    }
}