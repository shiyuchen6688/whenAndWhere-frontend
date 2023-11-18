import React from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Chip,
    Box
} from '@mui/material';
const PostsPage = () => {
    // Static data for posts, typically this would come from an API
    const postsData = [
        {
            id: 1,
            location: "Central Park",
            date: "2023-04-15",
            time: "14:00",
            peopleCount: { joined: 5, allowed: 20 },
            restrictions: ["No Alcohol", "No Smoke", "Adults Only"],
            topic: "Spring Photography"
        },
        {
            id: 2,
            location: "Downtown Cafe",
            date: "2023-04-18",
            time: "18:00",
            peopleCount: { joined: 8, allowed: 15 },
            restrictions: ["No Smoke"],
            topic: "Coffee Enthusiasts Meet"
        },
        {
            id: 3,
            location: "Central Park",
            date: "2023-04-15",
            time: "14:00",
            peopleCount: { joined: 5, allowed: 20 },
            restrictions: ["No Alcohol", "No Smoke", "Adults Only"],
            topic: "Spring Photography"
        },
        {
            id: 4,
            location: "Downtown Cafe",
            date: "2023-04-18",
            time: "18:00",
            peopleCount: { joined: 8, allowed: 15 },
            restrictions: ["No Smoke"],
            topic: "Coffee Enthusiasts Meet"
        },
        {
            id: 5,
            location: "Central Park",
            date: "2023-04-15",
            time: "14:00",
            peopleCount: { joined: 5, allowed: 20 },
            restrictions: ["No Alcohol", "No Smoke", "Adults Only"],
            topic: "Spring Photography"
        },
        {
            id: 6,
            location: "Downtown Cafe",
            date: "2023-04-18",
            time: "18:00",
            peopleCount: { joined: 8, allowed: 15 },
            restrictions: ["No Smoke"],
            topic: "Coffee Enthusiasts Meet"
        },
        {
            id: 7,
            location: "Central Park",
            date: "2023-04-15",
            time: "14:00",
            peopleCount: { joined: 5, allowed: 20 },
            restrictions: ["No Alcohol", "No Smoke", "Adults Only"],
            topic: "Spring Photography"
        },
        {
            id: 8,
            location: "Downtown Cafe",
            date: "2023-04-18",
            time: "18:00",
            peopleCount: { joined: 8, allowed: 15 },
            restrictions: ["No Smoke"],
            topic: "Coffee Enthusiasts Meet"
        },
    ];



    return (
        // Box is a wrapper component that allows for custom styles
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            {/* Typography component for displaying text, in this case, the page title */}
            <Typography variant="h4" component="div" gutterBottom align="center">
                Meetup Posts
            </Typography>
            {/* Grid container to create a layout with multiple columns based on the screen size */}
            <Grid container spacing={2} justifyContent="center">
                {/* Mapping through each post in the data array to create grid items */}
                {postsData.map((post) => (
                    <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>
                        {/* Card component to contain each post */}
                        <Card>
                            <CardContent>
                                {/* Post topic as the Card title */}
                                <Typography variant="h5" component="div" color="black">
                                    {post.topic}
                                </Typography>
                                {/* Post details */}
                                <Typography variant="body2" color="black">
                                    {post.location} - {post.date} at {post.time}
                                </Typography>
                                <Typography variant="body2" color="black">
                                    {post.peopleCount.joined}/{post.peopleCount.allowed} people joined
                                </Typography>
                                {/* Chips to display the restrictions */}
                                <Box display="flex" flexWrap="wrap" gap={0.5} marginTop={1}>
                                    {post.restrictions.map((restriction, index) => (
                                        <Chip key={index} label={restriction} size="small" color="primary" />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

// Exporting the PostsPage component to be used in other parts of the application
export default PostsPage;

