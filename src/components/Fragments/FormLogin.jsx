import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Email" type="email" placeholder="user@example.com" name="name" />
      <div className="mb-6">
        <InputForm label="Password" type="password" placeholder="********" name="password" />
      </div>
      <Button warna="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
