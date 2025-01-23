import React from 'react';
import BlogCard from '../components/BlogCard';
import Grid from '@mui/material/Grid';

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: { posts: data },
    };
}

const HomePage = ({ posts }) => {
    return ( <
        div style = {
            { backgroundColor: '#f0f4f8', padding: '40px 20px' } } >
        <
        h1 style = {
            {
                textAlign: 'center',
                fontSize: '3rem',
                color: '#512da8',
                marginBottom: '40px',
                fontWeight: 'bold',
            }
        } >
        Blog Posts <
        /h1> <
        Grid container spacing = { 4 }
        justifyContent = "center" > {
            posts.map((post) => ( <
                Grid item xs = { 12 }
                sm = { 6 }
                md = { 4 }
                key = { post.id } >
                <
                BlogCard post = { post }
                /> <
                /Grid>
            ))
        } <
        /Grid> <
        /div>
    );
};

export default HomePage;