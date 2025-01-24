import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (token) {
            setIsAuthenticated(true)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        setIsAuthenticated(false)
    }

    return ( <
        header className = "bg-gray-800 p-4 text-white flex justify-between" >
        <
        nav >
        <
        Link href = "/" >
        <
        a className = "mr-4" > Home < /a> <
        /Link> <
        Link href = "/profile" >
        <
        a className = "mr-4" > Profile < /a> <
        /Link> <
        /nav> <
        div > {
            isAuthenticated ? ( <
                button onClick = { handleLogout }
                className = "bg-red-500 p-2" >
                Logout <
                /button>
            ) : ( <
                Link href = "/login" >
                <
                a className = "bg-blue-500 p-2" > Login < /a> <
                /Link>
            )
        } <
        /div> <
        /header>
    )
}

export default Header