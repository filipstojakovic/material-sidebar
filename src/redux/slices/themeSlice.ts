import {createSlice} from "@reduxjs/toolkit";
import {PaletteMode} from "@mui/material";

export type ThemeState = {
    mode: PaletteMode
}

const initialThemeState = {
    mode: "light"
} as ThemeState

const themeSlice = createSlice({
    name: "theme",
    initialState: initialThemeState,
    reducers: {
        onSwitchThemeClick: (state: ThemeState) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
    }
});
export const {onSwitchThemeClick} = themeSlice.actions
export default themeSlice.reducer;
