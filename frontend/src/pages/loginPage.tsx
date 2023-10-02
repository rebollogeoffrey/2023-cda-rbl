import CreateAccountForm from "../components/formcreateaccount";
import Login from "../components/login";
import Logo from "../components/logo";

function LoginPage() {
  return (
    <>
      <Logo />
      <main>
        <Login />
        <CreateAccountForm />
      </main>
    </>
  );
}

export default LoginPage;
