import React, { useState } from 'react';
// Importing necessary components from Material-UI
import { Container, TextField, Button, Typography, Box, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    // State to manage form inputs and view toggle
    const [isSignUp, setIsSignUp] = useState(false);
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        email: '', // Added email for the signup process
    });

    const navigate = useNavigate()

    // Toggle between sign up and sign in
    const toggleIsSignUp = () => setIsSignUp(!isSignUp);

    // Handle input changes
    const handleChange = (prop) => (event) => {
        setCredentials({ ...credentials, [prop]: event.target.value });
    };

    // Handle form submission
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(isSignUp ? 'Signup Info' : 'Login Info', credentials);
    //     // Here you would typically handle the login or signup logic
    // };

    // Function to handle user registration or login
    const handleAuthentication = async (event) => {
        event.preventDefault();
        try {
            if (isSignUp) {
                // Register a new user
                const response = await fetch('http://localhost:3001/api/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(credentials),
                });

                if (response.ok) {
                    console.log('User registered successfully');
                    navigate("/posts");
                } else {
                    console.error('User registration failed');
                }
            } else {
                // Login with existing credentials
                const response = await fetch('http://localhost:3001/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(credentials),
                });

                if (response.ok) {
                    const data = await response.json();
                    const accessToken = data.accessToken;
                    console.log('User logged in successfully');
                    // Store the access token (e.g., in local storage or state) for future authenticated requests
                    localStorage.setItem('accessToken', accessToken);
                    navigate("/posts");
                } else {
                    console.error('User login failed');
                }
            }
        } catch (error) {
            console.error('Authentication failed:', error);
        }
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
                <Box component="form" onSubmit={handleAuthentication} noValidate sx={{ mt: 1 }}>
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
                            sx={{ color: 'black' }}
                            inputProps={{ style: { color: 'black' } }} // Set text color to black
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
                        sx={{ color: 'black' }}
                        inputProps={{ style: { color: 'black' } }} // Set text color to black
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
                        sx={{ color: 'black' }}
                        inputProps={{ style: { color: 'black' } }} // Set text color to black
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
