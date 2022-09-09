import storage from "redux-persist/lib/storage";
import {combineReducers} from "@reduxjs/toolkit";
import drawerSlice from "./slices/drawerSlice";
import headerSlice from "./slices/headerSlice";
import themeSlice from "./slices/themeSlice";
import {persistReducer} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["theme", "drawer"]
}

const rootReducer = combineReducers({
    drawer: drawerSlice,
    header: headerSlice,
    theme: themeSlice
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)