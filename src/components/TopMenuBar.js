import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // navigation between different react pages

export default function TopMenuBar() {

    const navigate = useNavigate()

    const pages = [
        { text: 'Home', actions: () => navigate("/") },
        { text: 'Posts', actions: () => navigate("/posts") },
        { text: 'Create', actions: () => navigate("/create") },
        { text: 'Chat', actions: () => navigate("/chat") }
    ];


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* IconButton for menu icon with edge set to start and color inherit */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>


                    <Box sx={{ flexGrow: 1, alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
                        {/* Title / Branding */}
                        <Typography variant="h6" component="div">
                            When and Where
                        </Typography>
                        {/* Navigation Buttons */}
                        {pages.map((page) => (
                            <MenuItem color="inherit" key={page.text} onClick={page.actions} >
                                <Typography textAlign="center">{page.text}</Typography>
                            </MenuItem>
                        ))}
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
