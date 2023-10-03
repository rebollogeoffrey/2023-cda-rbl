import "../styles/form.css";

function Login() {
  return (
    <div className="form-container container-login">
      <h1> Login </h1>
      <form className="form-login">
        <label>Username</label>
        <input
          type="text"
          id="username-login"
          name="username"
          placeholder="Your username.."
        />
        <label>Password</label>
        <input
          type="password"
          id="password-login"
          name="password"
          placeholder="Your password.."
        />

        <input id="signin-button" type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default Login;
