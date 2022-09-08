import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HeaderText} from "../../menudrawer/menuitems/HeaderText";

export type HeaderState = {
    headerText: string;
    selectedIndex: number;
}

export const initialHeaderState = {
    headerText: HeaderText.A_HEADER,
    selectedIndex: 0,
} as HeaderState

const headerSlice = createSlice({
    name: "header",
    initialState: initialHeaderState,
    reducers: {
        onMenuItemClick: (state: HeaderState, action: PayloadAction<HeaderState>) => {
            state.headerText = action.payload.headerText;
            state.selectedIndex = action.payload.selectedIndex;
        },
    }
});
export const {onMenuItemClick} = headerSlice.actions
export default headerSlice.reducer;
