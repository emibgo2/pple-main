import { combineReducers } from "redux";
import setToken from './auth/token';
import uuid from "./auth/uuid";
import account from "./auth/account";
const rootReducer = combineReducers({
    setToken,
    uuid,
    account
});

export default rootReducer; 

export type RootState = ReturnType<typeof rootReducer>; 
	