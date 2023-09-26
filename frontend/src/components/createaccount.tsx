import "../styles/createaccount.css";

function CreateAccount() {
  return (
    <div className="create-constructor">
      <h2> New Player ? </h2>
      <h1> Come Here! </h1>
      <form className="create-form-constructor">
        <label> Username </label>
        <input
          type="text"
          id="create-username"
          name="username"
          placeholder="Your username.."
        />
        <label> Email </label>
        <input
          type="text"
          id="create-email"
          name="email"
          placeholder="Your email.."
        />
        <label> Password </label>
        <input
          type="password"
          id="create-password"
          name="password"
          placeholder="Your password.."
        />

        <input id="signup-button" type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default CreateAccount;
