import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// this is just a fake chat room, in reality we would probably use 3rd party chat plugin like sendbird
const ChatPage = () => {
    const [messages, setMessages] = useState([]); // Holds all chat messages
    const [currentMessage, setCurrentMessage] = useState(''); // Current message being typed

    // Function to handle sending a message
    const sendMessage = () => {
        if (currentMessage.trim() !== '') {
            setMessages([...messages, currentMessage]);
            setCurrentMessage('');
        }
    };

    // Function to handle input field changes
    const handleMessageChange = (event) => {
        setCurrentMessage(event.target.value);
    };

    // Function to handle "Enter" key press within the text field
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>Chat Room</Typography>
            <Paper style={{ height: 300, overflowY: 'auto' }}>
                <List>
                    {messages.map((message, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={message} primaryTypographyProps={{ style: { color: 'black' } }} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 2,
                }}
            >
                <TextField
                    label="Type a message..."
                    fullWidth
                    variant="outlined"
                    value={currentMessage}
                    color="primary"
                    onChange={handleMessageChange}
                    onKeyPress={handleKeyPress}
                    InputProps={{ // Use the InputProps prop to target the input element itself
                        style: { color: 'black' }
                    }}
                />

                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                    onClick={sendMessage}
                    sx={{ ml: 1 }}
                >
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default ChatPage;
