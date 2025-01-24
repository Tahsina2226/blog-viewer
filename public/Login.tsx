import { useAuth } from '@kinde-oss/kinde-auth-next';

export default function Login() {
  const { login } = useAuth();

  return (
    <>
      <div className="login-container">
        <div className="login-content">
          <div className="login-header">
            <h1>Welcome Back!</h1>
            <p>Access your personalized dashboard and content seamlessly.</p>
          </div>
          <div className="login-actions">
            <button onClick={() => login()} className="login-button">
              Login with Kinde
            </button>
            <p>
              Need help?{' '}
              <a href="#" className="login-support-link">
                Contact Support
              </a>
            </p>
          </div>
        </div>
        <div className="login-illustration">
          <img
            src="https://via.placeholder.com/400x300.png?text=Illustration"
            alt="Login Illustration"
            className="illustration-image"
          />
        </div>
      </div>

      <style jsx>{`
        body {
          margin: 0;
          font-family: 'Arial', sans-serif;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: #333;
        }

        .login-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          box-sizing: border-box;
        }

        .login-content {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          padding: 40px 30px;
          max-width: 450px;
          text-align: center;
          flex: 1;
          margin-right: 20px;
        }

        .login-header h1 {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #333;
        }

        .login-header p {
          font-size: 16px;
          color: #666;
          margin-bottom: 30px;
        }

        .login-actions .login-button {
          padding: 15px 25px;
          background-color: #007bff;
          color: #fff;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
        }

        .login-actions .login-button:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }

        .login-actions p {
          margin-top: 20px;
          font-size: 14px;
          color: #777;
        }

        .login-actions .login-support-link {
          color: #007bff;
          text-decoration: none;
          font-weight: 500;
        }

        .login-actions .login-support-link:hover {
          text-decoration: underline;
          color: #0056b3;
        }

        .login-illustration {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .illustration-image {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}
