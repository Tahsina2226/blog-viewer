import { useAuth } from '@kinde-oss/kinde-auth-nextjs';

const Profile = () => {
    const { isAuthenticated, user, login, logout } = useAuth();

    console.log({ isAuthenticated, user });

    if (!isAuthenticated) {
        if (typeof window !== 'undefined') {
            login();
        }
        return null;
    }

    return ( <
        div >
        <
        h1 > Welcome to your profile! < /h1> <
        p > Hello, { user ? .given_name || 'User' }! < /p> <
        /div>
    );
};

export default Profile;