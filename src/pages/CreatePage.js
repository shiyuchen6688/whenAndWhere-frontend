import React, { useState } from 'react';
import { TextField, Button, Chip, InputLabel, FormControl, Select, MenuItem, Box, Stack, Typography } from '@mui/material';

const EventForm = () => {
    const [formData, setFormData] = useState({
        location: '',
        date: '',
        time: '',
        peopleCountJoined: '',
        peopleCountAllowed: '',
        restrictions: [],
        topic: '',
    });

    const [restriction, setRestriction] = useState('');

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit the form data
        console.log(formData);
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
            />
            <TextField
                label="Date"
                name="date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.date}
                onChange={handleInputChange}
            />
            <TextField
                label="Time"
                name="time"
                type="time"
                InputLabelProps={{ shrink: true }}
                value={formData.time}
                onChange={handleInputChange}
            />
            <TextField
                label="People Joined"
                name="peopleCountJoined"
                type="number"
                value={formData.peopleCountJoined}
                onChange={handleInputChange}
            />
            <TextField
                label="People Allowed"
                name="peopleCountAllowed"
                type="number"
                value={formData.peopleCountAllowed}
                onChange={handleInputChange}
            />
            <TextField
                label="Topic"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
            />
            <Stack direction="row" spacing={1}>
                <FormControl>
                    <InputLabel>Restrictions</InputLabel>
                    <Select
                        value={restriction}
                        label="Restrictions"
                        onChange={handleRestrictionChange}
                        sx={{ m: 1, minWidth: 120 }}
                    >
                        <MenuItem value="No Alcohol">No Alcohol</MenuItem>
                        <MenuItem value="No Smoke">No Smoke</MenuItem>
                        <MenuItem value="Adults Only">Adults Only</MenuItem>
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
