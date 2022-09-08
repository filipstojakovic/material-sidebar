import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {useNavigate} from "react-router-dom";


export function MenuItems() {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    function handleClick(path: string, index: number) {
        setSelectedIndex(index);
        navigate(path)
    }

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={(e) => handleClick("/a", 0)}
                                selected={selectedIndex === 0}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"A menu item"}/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={(e) => handleClick("/b", 1)}
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