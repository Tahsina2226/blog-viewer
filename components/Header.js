import Link from "next/link";
import { useAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function Header() {
    const { isAuthenticated, login, logout } = useAuth();

    return ( <
        header className = "bg-gray-800 text-white p-4" >
        <
        nav className = "flex justify-between" >
        <
        div >
        <
        Link href = "/" > < a className = "mr-4" > Home < /a></Link >
        <
        Link href = "/profile" > < a > Profile < /a></Link >
        <
        /div> <
        div > {!isAuthenticated ? ( <
                button onClick = { login }
                className = "bg-blue-500 px-4 py-2 rounded" > Login < /button>
            ) : ( <
                button onClick = { logout }
                className = "bg-red-500 px-4 py-2 rounded" > Logout < /button>
            )
        } <
        /div> <
        /nav> <
        /header>
    );
}