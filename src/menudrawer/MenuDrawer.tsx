import React from 'react';
import Drawer from "@mui/material/Drawer";
import {MenuItems} from "./menuitems/MenuItems";
import {drawerStyle} from "./style";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import Toolbar from '@mui/material/Toolbar';

export function MenuDrawer() {
    const openDrawer: boolean = useSelector((state: RootState) => state.drawer.openDrawer);

    return (
        <Drawer
            sx={drawerStyle}
            variant="persistent"
            anchor="left"
            open={openDrawer}
        >
            <Toolbar/>
            <MenuItems/>
        </Drawer>
    );
}