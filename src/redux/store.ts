import {configureStore} from "@reduxjs/toolkit";
import drawerSlice from "./slices/drawerSlice";

export const store = configureStore({
    reducer: {
        drawer: drawerSlice,
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {drawer: DrawerState, etc }
export type AppDispatch = typeof store.dispatch