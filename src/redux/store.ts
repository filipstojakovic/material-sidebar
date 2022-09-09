import {configureStore} from "@reduxjs/toolkit";
import drawerSlice from "./slices/drawerSlice";
import headerSlice from "./slices/headerSlice";
import {useDispatch} from "react-redux";
import themeSlice from "./slices/themeSlice";


export const store = configureStore({
    reducer: {
        drawer: drawerSlice,
        header: headerSlice,
        theme: themeSlice
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {drawer: DrawerState, HeaderState, etc }
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
