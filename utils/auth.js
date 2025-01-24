import { KindeAuth } from '@kinde-oss/kinde-auth-nextjs';

const kindeAuth = new KindeAuth({
    issuer: process.env.KINDE_ISSUER_URL,
    clientId: process.env.KINDE_CLIENT_ID,
    redirectUri: `${process.env.KINDE_SITE_URL}/api/auth/callback`,
    postLogoutRedirectUri: process.env.KINDE_POST_LOGOUT_REDIRECT_URL,
});

export default kindeAuth;