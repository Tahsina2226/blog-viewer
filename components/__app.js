import '../styles/globals.css';
import { KindeProvider } from '@kinde-oss/kinde-auth-nextjs';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
    return ( <
        KindeProvider domain = "your-kinde-domain"
        clientId = "your-client-id"
        redirectUri = "http://localhost:3000/api/auth/callback" >
        <
        Navbar / >
        <
        Component {...pageProps }
        /> <
        /KindeProvider>
    );
}

export default MyApp;