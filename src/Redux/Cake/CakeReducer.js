import {BUY_CAKE} from './CakeTypes'

//Let's create initial state
const initialState = {
    numberOfCakes: 10
}

//Let' create reducer
const cakeReducer =( state = initialState, action) =>{
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload,
            }
        default:
            return state
    }
}

export default cakeReducer;