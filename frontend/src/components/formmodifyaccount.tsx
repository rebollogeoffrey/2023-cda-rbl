import "../styles/form.css";

function ModifyAccountForm() {
  return (
    <div className="form-container container-modify">
      <h1> Your account </h1>
      <form className="form-modify">
        <label>Username</label>
        <input
          type="text"
          id="username-modify"
          name="username"
          placeholder="Your username.."
        />
        <label>Email</label>
        <input
          type="text"
          id="email-modify"
          name="email"
          placeholder="Your email.."
        />
        <label>Password</label>
        <input
          type="password"
          id="password-modify"
          name="password"
          placeholder="Your password.."
        />
        <label>Confirm Password</label>
        <input
          type="password"
          id="confirm-password-modify"
          name="confirm-password"
          placeholder="Confirm your password.."
        />

        <input id="modify-button" type="submit" value="Done" />
      </form>
    </div>
  );
}

export default ModifyAccountForm;
