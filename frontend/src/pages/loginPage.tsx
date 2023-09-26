import CreateAccount from "../components/createaccount";
import Login from "../components/login";
import Logo from "../components/logo";

function LoginPage() {
  return (
    <>
      <Logo />
      <main>
        <Login />
        <CreateAccount />
      </main>
    </>
  );
}

export default LoginPage;
