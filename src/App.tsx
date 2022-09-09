import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {DrawerHeader, Main} from "./styles";
import {TopAppBar} from "./header/TopAppBar";
import {AppRoutes} from "./routes/AppRoutes";
import {MenuDrawer} from "./menudrawer/MenuDrawer";
import {createTheme, PaletteMode, ThemeProvider} from "@mui/material";
import {green, pink} from "@mui/material/colors";
import {BrowserRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";

export default function App() {
    const openDrawer: boolean = useSelector((state: RootState) => state.drawer.openDrawer);
    const mode: PaletteMode = useSelector((state: RootState) => state.theme.mode);

    const theme = createTheme({
        palette: {
            mode: mode,
            primary: green,
            secondary: pink
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex'}}>
                <BrowserRouter>
                    <CssBaseline/>
                    <TopAppBar/>
                    <MenuDrawer/>
                    <Main open={openDrawer}>
                        <DrawerHeader/>
                        <AppRoutes/>
                    </Main>
                </BrowserRouter>
            </Box>
        </ThemeProvider>
    );
}
