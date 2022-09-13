import {createSlice} from "@reduxjs/toolkit";

export type DrawerState = {
    openDrawer: boolean;
}

const initialDrawerState = {
    openDrawer: true
} as DrawerState

const drawerSlice = createSlice({
    name: "drawer",
    initialState: initialDrawerState,
    reducers: {
        handleDrawerButton: (state: DrawerState) => {
            state.openDrawer = !state.openDrawer;
        },
    }
});
export const {handleDrawerButton} = drawerSlice.actions
export default drawerSlice.reducer;
