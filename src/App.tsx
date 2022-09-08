import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {DrawerHeader, Main} from "./styles";
import {TopAppBar} from "./header/TopAppBar";
import {AppRoutes} from "./routes/AppRoutes";
import {MenuDrawer} from "./menudrawer/MenuDrawer";
import {createTheme, ThemeProvider} from "@mui/material";
import {green} from "@mui/material/colors";
import {BrowserRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: green
    }
});

export default function App() {
    const openDrawer: boolean = useSelector((state: RootState) => state.drawer.openDrawer);

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
