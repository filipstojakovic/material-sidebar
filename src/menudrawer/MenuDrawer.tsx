import React from 'react';
import Drawer from "@mui/material/Drawer";
import {DrawerHeader} from "../styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import {MenuItems} from "./menuitems/MenuItems";
import {useTheme} from "@mui/material/styles";
import {drawerStyle} from "./style";
import {useDispatch, useSelector} from "react-redux";
import {handleCloseDrawer} from "../redux/slices/drawerSlice";
import {RootState} from "../redux/store";


export function MenuDrawer() {
    const theme = useTheme();
    const openDrawer: boolean = useSelector((state: RootState) => state.drawer.openDrawer);
    const dispatch = useDispatch();

    function handleDrawerClose() {
        dispatch(handleCloseDrawer());
    }

    return (
        <Drawer
            sx={drawerStyle}
            variant="persistent"
            anchor="left"
            open={openDrawer}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <MenuItems/>
        </Drawer>
    );
}