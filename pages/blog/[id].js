import React from 'react';

export async function getServerSideProps({ params }) {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return { props: { post: data } };
}

const BlogDetails = ({ post }) => {
    return ( <
        div >
        <
        h2 > { post.title } < /h2> <
        p > { post.body } < /p> <
        /div>
    );
};

export default BlogDetails;