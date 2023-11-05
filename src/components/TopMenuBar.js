import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; // navigation between different react pages

export default function TopMenuBar() {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
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
                    {/* Title / Branding */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        When and Where
                    </Typography>
                    {/* Navigation Buttons */}
                    <Button color="inherit">Login</Button>
                    {/* Add additional buttons or icons here */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
