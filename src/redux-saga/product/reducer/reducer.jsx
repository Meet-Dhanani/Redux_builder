import { GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS } from "../action/action"

const initialstate = {
    product: [],

    getProductProgress: false,
    getProductError: null,
    dataIsLoaded: false
}

const productReducer = (state = initialstate, action) => {
    // console.log(action);
    switch (action.type) {
        case GET_PRODUCT_PROGRESS:
            return {
                ...state,
                getProductProgress: true
            }

        case GET_PRODUCT_ERROR:
            return {
                ...state,
                getProductError: action.data
            }

        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                dataIsLoaded: true,
                product: action.data
            }
        default: return state
    }
}

export default productReducer