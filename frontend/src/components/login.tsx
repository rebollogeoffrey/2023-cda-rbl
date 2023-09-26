import "../styles/login.css";

function Login() {
  return (
    <div className="login-constructor">
      <h1> Login </h1>
      <form className="login-form-constructor">
        <label> Username </label>
        <input
          type="text"
          id="login-username"
          name="username"
          placeholder="Your username.."
        />
        <label> Password </label>
        <input
          type="password"
          id="login-password"
          name="password"
          placeholder="Your password.."
        />

        <input id="signin-button" type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default Login;
