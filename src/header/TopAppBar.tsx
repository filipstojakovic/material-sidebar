import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {AppBar} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {handleOpenDrawer} from "../redux/slices/drawerSlice";
import {RootState} from "../redux/store";
import Tooltip from '@mui/material/Tooltip';
import {AvatarButton} from "./avatarbutton/AvatarButton";

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
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    flexDirection: "row",
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleClick}
                        edge="start"
                        sx={{mr: 2, ...(openDrawer && {display: 'none'})}}
                    >
                        <Tooltip title="Open drawer">
                            <MenuIcon/>
                        </Tooltip>
                    </IconButton>
                    <Typography variant="h5" noWrap component="div" sx={{display: {xs: 'none', md: 'flex'}}}>
                        {headerText}
                    </Typography>
                    <AvatarButton/>
                </div>
            </Toolbar>
        </AppBar>
    );
}

