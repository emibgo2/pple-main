import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// session Storage 에 저장
import storage from 'redux-persist/lib/storage'; 

import account from "./auth/account";

const persistConfig = {
    key: "root", 
    storage, 
    whileList : ["account"],
};

const rootReducer = combineReducers({
    account
});

export type RootState = ReturnType<typeof rootReducer>; 
export default persistReducer(persistConfig,rootReducer); 
	