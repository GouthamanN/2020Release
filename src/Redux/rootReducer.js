import { combineReducers } from "redux";
import cakeReducer from "./Cake/CakeReducer";
import iceCreamReducer from "./IceCream/IceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default rootReducer;
