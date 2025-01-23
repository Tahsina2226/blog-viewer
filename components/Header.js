import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Header = () => {
    const { data: session } = useSession();

    return ( <
        header >
        <
        nav >
        <
        Link href = "/" > Home < /Link> {
            session ? ( <
                >
                <
                Link href = "/profile" > Profile < /Link> <
                button > Logout < /button> {/ * Implement logout functionality * /} <
                />
            ) : ( <
                Link href = "/login" > Login < /Link>
            )
        } <
        /nav> <
        /header>
    );
};

export default Header;