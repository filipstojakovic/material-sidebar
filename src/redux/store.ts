import {combineReducers, configureStore} from "@reduxjs/toolkit";
import drawerSlice from "./slices/drawerSlice";
import headerSlice from "./slices/headerSlice";
import {useDispatch} from "react-redux";
import themeSlice from "./slices/themeSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    drawer: drawerSlice,
    header: headerSlice,
    theme: themeSlice
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["theme", "drawer"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {drawer: DrawerState, HeaderState, etc }
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
