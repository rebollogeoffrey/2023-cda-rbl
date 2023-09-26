import "../styles/modifyaccount.css";

function ModifyAccount() {
  return (
    <div className="modify-constructor">
      <h1> Your account </h1>
      <form className="modify-form-constructor">
        <label> Username </label>
        <input
          type="text"
          id="modify-username"
          name="username"
          placeholder="Your username.."
        />
        <label> Email </label>
        <input
          type="text"
          id="modify-email"
          name="email"
          placeholder="Your email.."
        />
        <label> Password </label>
        <input
          type="password"
          id="modify-password"
          name="password"
          placeholder="Your password.."
        />
        <label> Confirm Password </label>
        <input
          type="password"
          id="modify-confirm-password"
          name="confirm-password"
          placeholder="Confirm your password.."
        />

        <input id="modify-button" type="submit" value="Done" />
      </form>
    </div>
  );
}

export default ModifyAccount;
