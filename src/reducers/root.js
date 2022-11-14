import { combineReducers } from "redux";
import RegisterReducer from "./register";
import SignInReducer from "./signIn";

const rootReducer = combineReducers({
    signIn: SignInReducer,
    register: RegisterReducer
})

export default rootReducer