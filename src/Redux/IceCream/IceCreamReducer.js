import {BUY_ICECREAM} from './IceCreamType'

//let's define initial state
const initialState = {
    numberOfIcecreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM:
            return  {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - 1 
            }
            default: return state
    }
}

export default iceCreamReducer;