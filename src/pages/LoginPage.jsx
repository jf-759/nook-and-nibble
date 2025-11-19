import { useNavigate } from "react-router-dom";
import LoginForm from "../login/LoginForm";
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = (user) => {
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <LoginForm onLogin={handleLoginSuccess} />
      </div>
    </div>
  );
}

export default LoginPage;