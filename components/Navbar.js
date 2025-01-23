import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLoginLogout = () => {
        if (isAuthenticated) {
            setIsAuthenticated(false);
        } else {
            setIsAuthenticated(true);
        }
    };

    return ( <
        nav style = { styles.navbar } >
        <
        div style = { styles.navbarContainer } >
        <
        div style = { styles.logo } >
        <
        Link href = "/" >
        <
        span style = { styles.logoText } > Blog Viewer < /span> <
        /Link> <
        /div>

        <
        div style = { styles.header } >
        <
        Link href = "/" >
        <
        span style = { styles.headerLink } > Home < /span> <
        /Link> <
        Link href = "/profile" >
        <
        span style = { styles.headerLink } > Profile < /span> <
        /Link> <
        /div>

        <
        div > {
            isAuthenticated ? ( <
                button style = { styles.contactBtn }
                onClick = { handleLoginLogout } >
                Logout <
                /button>
            ) : ( <
                button style = { styles.contactBtn }
                onClick = { handleLoginLogout } >
                Login <
                /button>
            )
        } <
        /div> <
        /div> <
        /nav>
    );
}

const styles = {
    navbar: {
        backgroundColor: '#2d3748',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        padding: '10px 0',
    },
    navbarContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px',
    },
    logo: {
        fontSize: '26px',
        fontWeight: 'bold',
        color: '#ffffff',
    },
    logoText: {
        cursor: 'pointer',
        transition: 'opacity 0.3s ease',
    },
    header: {
        display: 'flex',
        gap: '30px',
        fontSize: '18px',
    },
    headerLink: {
        color: '#e2e8f0',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'color 0.3s ease, transform 0.3s ease',
    },
    headerLinkHover: {
        color: '#38b2ac',
        transform: 'scale(1.1)',
    },
    contactBtn: {
        padding: '12px 30px',
        backgroundColor: '#38b2ac',
        color: '#ffffff',
        fontWeight: '500',
        borderRadius: '50px',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
    },
    contactBtnHover: {
        backgroundColor: '#319795',
        transform: 'scale(1.05)',
    },
};