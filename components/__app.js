import '@/styles/globals.css';
import Header from '@/components/Header';
import { KindeAuthProvider } from '@kinde-oss/kinde-auth-nextjs';

function MyApp({ Component, pageProps }) {
    return ( <
        KindeAuthProvider >
        <
        Header / >
        <
        main className = "p-6" >
        <
        Component {...pageProps }
        /> <
        /main> <
        /KindeAuthProvider>
    );
}

export default MyApp;