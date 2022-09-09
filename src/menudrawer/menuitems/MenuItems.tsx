import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../redux/store";
import {FormControlLabel, PaletteMode} from "@mui/material";
import {onSwitchThemeClick} from "../../redux/slices/themeSlice";
import {MaterialUISwitch} from "../../styles";
import {routes} from "../../api/paths";

export function MenuItems() {
    const mode: PaletteMode = useSelector((state: RootState) => state.theme.mode);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    function handleItemClick(path: string) {
        navigate(path)
    }

    function handleSwitchTheme() {
        dispatch(onSwitchThemeClick());
    }

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton onClick={() => handleItemClick(routes.ROUTE_A)}
                                selected={location.pathname === routes.ROUTE_A}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"A menu item"}/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton onClick={() => handleItemClick(routes.ROUTE_B)}
                                selected={location.pathname === routes.ROUTE_B}>
                    <ListItemIcon>
                        <MailIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"B menu item"}/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
                <FormControlLabel
                    control={<MaterialUISwitch sx={{m: 1}}
                                               checked={mode !== "light"}
                                               value={mode !== "light"}
                                               onChange={handleSwitchTheme}
                    />}
                    label={mode + " theme"}
                />
            </ListItem>
        </List>
    )
}