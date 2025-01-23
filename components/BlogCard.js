import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Button from '@mui/material/Button';

const BlogCard = ({ post }) => {
    return ( <
        Link href = { `/blog/${post.id}` }
        passHref style = {
            { textDecoration: 'none' }
        } >
        <
        Card sx = {
            {
                maxWidth: 360,
                maxHeight: 480,
                boxShadow: 8,
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 16,
                },
            }
        } > { /* Background image with gradient overlay */ } <
        div style = {
            {
                backgroundImage: 'url(https://source.unsplash.com/random?nature,landscape)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
            }
        } >
        <
        div style = {
            {
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8))',
                height: '100%',
                width: '100%',
            }
        }
        /> < /
        div >

        { /* Card Content */ } <
        CardContent sx = {
            {
                position: 'relative',
                zIndex: 2,
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                padding: 3,
            }
        } >
        <
        Typography gutterBottom variant = "h5"
        component = "h2"
        sx = {
            {
                fontWeight: 'bold',
                fontSize: '1.75rem',
                textAlign: 'center',
                marginBottom: 2,
                textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)',
            }
        } > { post.title } <
        /Typography> <
        Typography variant = "body2"
        sx = {
            {
                fontSize: '1rem',
                marginBottom: 3,
                textAlign: 'justify',
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
            }
        } >
        <
        strong > Description: < /strong> {post.body.slice(0, 100)}... < /
        Typography > <
        Button variant = "contained"
        sx = {
            {
                textTransform: 'none',
                borderRadius: 25,
                padding: '0.5rem 1.5rem',
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: '1rem',
                background: 'linear-gradient(to right, #a8edea, #fed6e3)', // Soft pastel gradient
                color: 'black', // Dark text for contrast
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                '&:hover': {
                    background: 'linear-gradient(to right, #fed6e3, #a8edea)', // Reverse gradient on hover
                    transform: 'translateY(-3px)',
                },
            }
        } >
        Details <
        /Button> < /
        CardContent > <
        /Card> < /
        Link >
    );
};

export default BlogCard;