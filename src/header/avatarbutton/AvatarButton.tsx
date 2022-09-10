import React from 'react';
import Box from "@mui/material/Box";
import {Menu, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import {stringAvatar} from "./utils";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

const settings = ['Profile', 'Account', 'Dashboard'];
const user = "Filip Stojakovic";

export function AvatarButton() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{flexGrow: 0, marginLeft: "auto", marginRight: "0"}}>
            <Stack direction="row" alignItems={"center"}>
                <Typography
                    variant="h6" noWrap component="div"
                    sx={{display: {xs: 'none', md: 'flex'}}}
                >
                    {user}
                </Typography>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu}>
                        {/*stringAvatar shows name initials if picture not available*/}
                        <Avatar src={"https://i.pravatar.cc/40"} {...stringAvatar(user)} />
                    </IconButton>
                </Tooltip>
            </Stack>
            <Menu
                sx={{mt: '45px'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                <Divider/>
                <MenuItem key={"Logout"} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
}