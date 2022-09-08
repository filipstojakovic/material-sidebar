import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {HeaderText} from "./HeaderText";
import {RootState, useAppDispatch} from "../../redux/store";
import {onMenuItemClick} from "../../redux/slices/headerSlice";

export function MenuItems() {
    const selectedIndex: number = useSelector((state: RootState) => state.header.selectedIndex);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function handleClick(path: string, headerText: string, selectedIndex: number) {
        dispatch(onMenuItemClick({headerText, selectedIndex}))
        navigate(path)
    }

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={(e) => handleClick("/a", HeaderText.A_HEADER, 0)}
                                selected={selectedIndex === 0}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"A menu item"}/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={(e) => handleClick("/b", HeaderText.B_HEADER, 1)}
                                selected={selectedIndex === 1}>
                    <ListItemIcon>
                        <MailIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"B menu item"}/>
                </ListItemButton>
            </ListItem>
        </List>
    );
}