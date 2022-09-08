import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HeaderText} from "../../menudrawer/menuitems/HeaderText";

export type HeaderState = {
    headerText: string;
}

export const initialHeaderState = {
    headerText: HeaderText.A_HEADER
} as HeaderState

const headerSlice = createSlice({
    name: "header",
    initialState: initialHeaderState,
    reducers: {
        setHeaderText: (state: HeaderState, action: PayloadAction<string>) => {
            state.headerText = action.payload;
        },
    }
});
export const {setHeaderText} = headerSlice.actions
export default headerSlice.reducer;
