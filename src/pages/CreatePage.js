import React, { useState, useEffect } from 'react';
import { TextField, Button, Chip, InputLabel, FormControl, Select, MenuItem, Box, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EventForm = () => {
    const [formData, setFormData] = useState({
        location: '',
        date: '',
        time: '',
        peopleCount: {
            joined: 0,
            allowed: 1
        },
        restrictions: [],
        topic: '',
    });

    // check if user have logged in
    const isAuthenticated = !!localStorage.getItem('accessToken');
    const navigate = useNavigate()
    useEffect(() => {
        // Redirect to the login page if the user is not authenticated
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const [restriction, setRestriction] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name)

        // If the field name contains a dot (e.g., "peopleCount.joined"),
        // update the nested object accordingly
        if (name.includes('.')) {
            const [fieldName, nestedField] = name.split('.');
            console.log(fieldName)
            setFormData((prevData) => ({
                ...prevData,
                [fieldName]: {
                    ...prevData[fieldName],
                    [nestedField]: value,
                },
            }));
            console.log(formData)
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleRestrictionChange = (event) => {
        setRestriction(event.target.value);
    };

    const handleAddRestriction = () => {
        if (restriction && !formData.restrictions.includes(restriction)) {
            setFormData({ ...formData, restrictions: [...formData.restrictions, restriction] });
            setRestriction('');
        }
    };

    const handleRemoveRestriction = (deleteRestriction) => {
        setFormData({
            ...formData,
            restrictions: formData.restrictions.filter((res) => res !== deleteRestriction),
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Submit the form data
        // console.log(formData);
        try {
            // Create a POST request to your backend endpoint
            const response = await fetch('http://localhost:3001/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem("accessToken")
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Event created successfully');
                // Redirect to a success page or perform any necessary action
                navigate('/posts');
            } else {
                console.error('Event creation failed');
            }
        } catch (error) {
            console.error('Event creation failed:', error);
        }
    };

    return (
        <Box
            component="form"
            sx={{
                display: 'flex', // Enable flexbox
                flexDirection: 'column', // Stack children vertically
                // justifyContent: 'top', // align content vertically
                alignItems: 'center', // Center content horizontally
                height: '100vh', // Full height of the viewport
                marginTop: '80px',
                '& .MuiTextField-root': {
                    m: 1, width: '25ch'
                }, // Apply a margin of 1 spacing unit and a width equivalent to 25 '0' characters to the root element of all TextField components inside this parent component
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <Typography variant="h6">Event Registration Form</Typography>
            <TextField
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                inputProps={{ style: { color: 'black' } }}
            />
            <TextField
                label="Date"
                name="date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.date}
                onChange={handleInputChange}
                inputProps={{ style: { color: 'black' } }}
            />
            <TextField
                label="Time"
                name="time"
                type="time"
                InputLabelProps={{ shrink: true }}
                value={formData.time}
                onChange={handleInputChange}
                inputProps={{ style: { color: 'black' } }}
            />
            <TextField
                label="People Joined"
                name="peopleCount.joined"
                type="number"
                value={formData.peopleCount.joined}
                onChange={handleInputChange}
                inputProps={{ style: { color: 'black' } }}
            />
            <TextField
                label="People Allowed"
                name="peopleCount.allowed"
                type="number"
                value={formData.peopleCount.allowed}
                onChange={handleInputChange}
                inputProps={{ style: { color: 'black' } }}
            />
            <TextField
                label="Topic"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                inputProps={{ style: { color: 'black' } }}
            />
            <Stack direction="row" spacing={1}>
                <FormControl>
                    <InputLabel>Restrictions</InputLabel>
                    <Select
                        value={restriction}
                        label="Restrictions"
                        onChange={handleRestrictionChange}
                        sx={{ m: 1, minWidth: 120 }}
                        style={{ color: 'black' }}
                    >
                        <MenuItem value="No Alcohol" style={{ color: 'black' }}>No Alcohol</MenuItem>
                        <MenuItem value="No Smoke" style={{ color: 'black' }}>No Smoke</MenuItem>
                        <MenuItem value="Adults Only" style={{ color: 'black' }}>Adults Only</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" onClick={handleAddRestriction}>
                    Add
                </Button>
            </Stack>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {formData.restrictions.map((res, index) => (
                    <Chip
                        key={index}
                        label={res}
                        style={{ color: 'black' }}
                        onDelete={() => handleRemoveRestriction(res)}
                    />
                ))}
            </Box>
            <Button type="submit" variant="contained" sx={{ m: 1 }}>
                Submit
            </Button>
        </Box>
    );
};

export default EventForm;
