import SignupForm from "../login/SignupForm";
import "./LoginPage.css"; 

function SignupPage({ setUser }) {
  return (
    <div className="login-page">
      <div className="login-container">
        
        <h1>Create an Account</h1>

        <SignupForm setUser={setUser} />

      </div>
    </div>
  );
}

export default SignupPage;
