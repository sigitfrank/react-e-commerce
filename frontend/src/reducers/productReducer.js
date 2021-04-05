import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

export const productListReducer = (state = { loading: true, products: [] }, action) => {
    if (action.type === PRODUCT_LIST_REQUEST)
        return { loading: true }
    if (action.type === PRODUCT_LIST_SUCCESS)
        return { loading: false, products: action.payload }
    if (action.type === PRODUCT_LIST_FAIL)
        return { loading: false, error: action.payload }
    return state

}

export const productDetailsReducer = (state = { loading: true, product: {} }, action) => {
    if (action.type === PRODUCT_DETAILS_REQUEST)
        return { loading: true }
    if (action.type === PRODUCT_DETAILS_SUCCESS)
        return { loading: false, product: action.payload }
    if (action.type === PRODUCT_DETAILS_FAIL)
        return { loading: false, error: action.payload }
    return state
}

// it related to productAction.js