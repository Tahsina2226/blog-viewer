import React from 'react';

export async function getServerSideProps({ params }) {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return { props: { post: data } };
}

const BlogDetails = ({ post }) => {
    return ( <
        div style = {
            {
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(to right, #8e44ad, #3498db)',
                padding: '2rem',
            }
        } >
        <
        div style = {
            {
                maxWidth: '900px',
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                transform: 'scale(1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }
        }
        onMouseEnter = {
            (e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            }
        }
        onMouseLeave = {
            (e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }
        } >
        <
        div style = {
            {
                backgroundImage: 'url(https://source.unsplash.com/900x400/?technology,blog)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                width: '100%',
            }
        }
        /> <
        div style = {
            {
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
            }
        } >
        <
        h1 style = {
            {
                fontSize: '2.5rem',
                fontWeight: 'bold',
                margin: 0,
                textAlign: 'center',
                color: '#333',
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
            }
        } >
        { post.title } <
        /h1> <
        p style = {
            {
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: '#555',
                textAlign: 'justify',
            }
        } >
        { post.body } <
        /p> <
        div style = {
            { textAlign: 'center' } } >
        <
        button style = {
            {
                padding: '0.8rem 2rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: '#2980b9',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
            }
        }
        onMouseEnter = {
            (e) =>
            (e.target.style.backgroundColor = '#1e6091')
        }
        onMouseLeave = {
            (e) =>
            (e.target.style.backgroundColor = '#2980b9')
        }
        onClick = {
            () => window.history.back() } >
        Go Back <
        /button> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default BlogDetails;