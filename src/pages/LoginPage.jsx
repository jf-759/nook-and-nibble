import LoginForm from "../login/LoginForm";
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
