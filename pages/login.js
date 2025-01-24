import { useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleLogin = () => {
        if (email && password) {
            // Simulate successful login by saving token
            localStorage.setItem('authToken', 'dummyToken')
            router.push('/profile')
        }
    }

    return ( <
        div className = "min-h-screen flex items-center justify-center bg-gray-100" >
        <
        div className = "bg-white p-8 rounded-lg shadow-lg w-full max-w-md" >
        <
        h1 className = "text-3xl font-bold text-center text-gray-800 mb-6" > Login < /h1> <
        div className = "space-y-4" >
        <
        div >
        <
        label htmlFor = "email"
        className = "block text-sm font-medium text-gray-600" > Email < /label> <
        input type = "email"
        id = "email"
        placeholder = "Enter your email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        className = "w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" /
        >
        <
        /div> <
        div >
        <
        label htmlFor = "password"
        className = "block text-sm font-medium text-gray-600" > Password < /label> <
        input type = "password"
        id = "password"
        placeholder = "Enter your password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        className = "w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" /
        >
        <
        /div> <
        button onClick = { handleLogin }
        className = "w-full py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition duration-300" >
        Login <
        /button> <
        /div> <
        div className = "text-center mt-4" >
        <
        span className = "text-sm text-gray-500" > Don 't have an account? </span> <
        a href = "/signup"
        className = "text-sm text-blue-500 hover:underline" > Sign up < /a> <
        /div> <
        /div> <
        /div>
    )
}

export default Login