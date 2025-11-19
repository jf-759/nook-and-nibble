import { useState } from "react";
import { supabase } from "../supabaseClient";

function SignupForm({ onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      onSignup(data.user);
      alert("Signup successful! Please check your email to confirm your account.");
    }
  };

  return (
    <form onSubmit={handleSignup} className="page-container">
      <h2>Sign Up</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Sign Up</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default SignupForm;
