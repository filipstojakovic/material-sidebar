import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HeaderTextEnum} from "../../header/HeaderTextEnum";

export type HeaderState = {
    headerText: string;
}

const initialHeaderState = {
    headerText: HeaderTextEnum.A_HEADER,
} as HeaderState

const headerSlice = createSlice({
    name: "header",
    initialState: initialHeaderState,
    reducers: {
        updateHeaderText: (state: HeaderState, action: PayloadAction<HeaderState>) => {
            state.headerText = action.payload.headerText;
        },
    }
});
export const {updateHeaderText} = headerSlice.actions
export default headerSlice.reducer;
