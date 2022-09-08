import React, {useContext} from 'react';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {OpenDrawerProps} from "../menudrawer/MenuDrawer";
import {DrawerContext} from "../App";
import {AppBar} from "./style";

export function TopAppBar() {
    const {openDrawer, setOpenDrawer} = useContext<OpenDrawerProps>(DrawerContext);

    function handleOpenDrawer() {
        setOpenDrawer(true);
    }

    return (
        <AppBar position="fixed" open={openDrawer}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleOpenDrawer}
                    edge="start"
                    sx={{mr: 2, ...(openDrawer && {display: 'none'})}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Persistent drawer header
                </Typography>
            </Toolbar>
        </AppBar>
    );
}