import * as React from 'react';
import {createContext, useState} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {DrawerHeader, Main} from "./styles";
import {TopAppBar} from "./header/TopAppBar";
import {AppRoutes} from "./routes/AppRoutes";
import {MenuDrawer, OpenDrawerProps} from "./menudrawer/MenuDrawer";
import {createTheme, PaletteMode, ThemeProvider} from "@mui/material";
import {green} from "@mui/material/colors";
import {BrowserRouter} from "react-router-dom";

export const DrawerContext = createContext<OpenDrawerProps>({
    openDrawer: true, setOpenDrawer: () => {
    }
})

export default function App() {
    const [openDrawer, setOpenDrawer] = useState(true);
    const [mode, setMode] = useState<PaletteMode>("light");

    const theme = createTheme({
        palette: {
            mode: mode,
            primary: green
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <DrawerContext.Provider value={{openDrawer, setOpenDrawer}}>
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
            </DrawerContext.Provider>
        </ThemeProvider>
    );
}
