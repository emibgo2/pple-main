import { combineReducers } from "redux";
import setToken from './auth/token';
import uuid from "./auth/uuid";
const rootReducer = combineReducers({
    setToken,
    uuid
});

export default rootReducer; 

export type RootState = ReturnType<typeof rootReducer>; 
	