import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Button from '@mui/material/Button';

const BlogCard = ({ post }) => {
    return ( <
        Link href = { `/blog/${post.id}` }
        passHref >
        <
        Card sx = {
            {
                maxWidth: 345,
                maxHeight: 450,
                boxShadow: 6,
                borderRadius: 2,
                backgroundImage: 'url(https://source.unsplash.com/random?nature,landscape)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 10,
                    backgroundColor: '#3f51b5',
                },
            }
        } >
        <
        CardContent sx = {
            {
                padding: 3,
                background: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '0 0 16px 16px',
                height: '100%',
            }
        } >
        <
        Typography gutterBottom variant = "h5"
        component = "h2"
        sx = {
            {
                fontWeight: 'bold',
                fontSize: '1.5rem',
                textAlign: 'center',
                marginBottom: 2,
                color: 'white',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            }
        } >
        { post.title } <
        /Typography> <
        Typography variant = "body2"
        sx = {
            {
                fontSize: '0.875rem',
                color: 'white',
                marginBottom: 1,
            }
        } >
        <
        strong > User ID: < /strong> { post.userId } <
        /Typography> <
        Typography variant = "body2"
        sx = {
            {
                fontSize: '0.875rem',
                color: 'white',
                marginBottom: 2,
            }
        } >
        <
        strong > Post ID: < /strong> { post.id } <
        /Typography> <
        Typography variant = "body2"
        sx = {
            {
                color: 'white',
                fontSize: '0.875rem',
                marginBottom: 3,
            }
        } >
        <
        strong > Body: < /strong> { post.body.slice(0, 100) }... <
        /Typography> <
        Button variant = "contained"
        color = "primary"
        sx = {
            {
                textTransform: 'none',
                borderRadius: 20,
            }
        } >
        Read More <
        /Button> <
        /CardContent> <
        /Card> <
        /Link>
    );
};

export default BlogCard;