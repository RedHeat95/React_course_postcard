import { Input } from "../Input/Input";
import { Button } from "../Buttons/Button";

export const RegisterForm = () => {
  return (
    <>
      <Input type="text" text="User name" value="" onChange={() => {}} />
      <Input type="email" text="Email" value="" onChange={() => {}} />
      <Input type="password" text="Password" value="" onChange={() => {}} />
      <Input
        type="password"
        text="Confirm password"
        value=""
        onChange={() => {}}
      />
      <Button text="Login" onClick={() => {}} />
      <p>
        If you have account, you can <a href="">login</a>
      </p>
    </>
  );
};
