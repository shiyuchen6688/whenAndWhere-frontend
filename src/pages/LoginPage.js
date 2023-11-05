import React, { useState } from 'react';
// Importing necessary components from Material-UI
import { Container, TextField, Button, Typography, Box, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const AuthForm = () => {
    // State to manage form inputs and view toggle
    const [isSignUp, setIsSignUp] = useState(false);
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        email: '', // Added email for the signup process
    });

    // Toggle between sign up and sign in
    const toggleIsSignUp = () => setIsSignUp(!isSignUp);

    // Handle input changes
    const handleChange = (prop) => (event) => {
        setCredentials({ ...credentials, [prop]: event.target.value });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(isSignUp ? 'Signup Info' : 'Login Info', credentials);
        // Here you would typically handle the login or signup logic
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <LockOutlinedIcon />
                <Typography component="h1" variant="h5">
                    {isSignUp ? 'Sign up' : 'Log in'}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    {isSignUp && (
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus={!isSignUp}
                            value={credentials.email}
                            onChange={handleChange('email')}
                        />
                    )}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus={isSignUp}
                        value={credentials.username}
                        onChange={handleChange('username')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={credentials.password}
                        onChange={handleChange('password')}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2" onClick={toggleIsSignUp}>
                                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default AuthForm;
