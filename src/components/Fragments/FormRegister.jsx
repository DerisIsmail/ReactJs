import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Fullname" type="text" placeholder="insert your name here" name="fullname" />
      <InputForm label="Email" type="email" placeholder="user@example.com" name="name" />
      <InputForm label="Password" type="password" placeholder="********" name="password" />
      <InputForm label="Confirm Password" type="password" placeholder="********" name="Confirm Password" />

      <Button warna="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
