import "../styles/form.css";

function CreateAccountForm() {
  return (
    <div className="form-container container-create">
      <h1> New Player ? </h1>
      <h2> Come Here! </h2>
      <form className="form-create">
        <label>Username</label>
        <input
          type="text"
          id="username-create"
          name="username"
          placeholder="Your username.."
        />
        <label>Email</label>
        <input
          type="text"
          id="email-create"
          name="email"
          placeholder="Your email.."
        />
        <label>Password</label>
        <input
          type="password"
          id="password-create"
          name="password"
          placeholder="Your password.."
        />

        <input id="signup-button" type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default CreateAccountForm;
