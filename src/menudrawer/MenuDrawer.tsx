import React, {useContext} from 'react';
import Drawer from "@mui/material/Drawer";
import {DrawerHeader} from "../styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import {MenuItems} from "./menuitems/MenuItems";
import {DrawerContext} from "../App";
import {useTheme} from "@mui/material/styles";
import {drawerStyle} from "./style";

export type OpenDrawerProps = {
    openDrawer: boolean;
    setOpenDrawer: (arg: boolean) => void;
};

export function MenuDrawer() {
    const {openDrawer, setOpenDrawer} = useContext<OpenDrawerProps>(DrawerContext);
    const theme = useTheme();

    function handleDrawerClose() {
        setOpenDrawer(false);
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