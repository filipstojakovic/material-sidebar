import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {persistStore} from "redux-persist";
import thunk from "redux-thunk";
import {persistedReducer} from "./persistedReducer";

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
// Export a hook that can be reused to resolve types
export const useAppDispatch: () => AppDispatch = useDispatch
