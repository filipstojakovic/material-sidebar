import {createSlice} from "@reduxjs/toolkit";

export type DrawerState = {
    openDrawer: boolean;
}

const drawerSlice = createSlice({
    name: "drawer",
    initialState: {
        openDrawer: true
    } as DrawerState,
    reducers: {
        handleOpenDrawer: (state: DrawerState) => {
            state.openDrawer = true;
        },
        handleCloseDrawer: (state: DrawerState) => {
            state.openDrawer = false;
        },
    }
});
export const {handleOpenDrawer, handleCloseDrawer} = drawerSlice.actions
export default drawerSlice.reducer;
