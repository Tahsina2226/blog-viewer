// pages/profile.js
import React from 'react';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    return { props: {} };
}

const Profile = () => {
    return ( <
        div >
        <
        h1 > Welcome to your profile! < /h1> <
        /div>
    );
};

export default Profile;