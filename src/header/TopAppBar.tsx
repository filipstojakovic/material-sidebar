import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {AppBar} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {handleOpenDrawer} from "../redux/slices/drawerSlice";
import {RootState} from "../redux/store";

export function TopAppBar() {
    const openDrawer: boolean = useSelector((state: RootState) => state.drawer.openDrawer);
    const headerText: string = useSelector((state: RootState) => state.header.headerText);

    const dispatch = useDispatch();

    function handleClick() {
        dispatch(handleOpenDrawer());
    }

    return (
        <AppBar position="fixed" open={openDrawer}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleClick}
                    edge="start"
                    sx={{mr: 2, ...(openDrawer && {display: 'none'})}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    {headerText}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

