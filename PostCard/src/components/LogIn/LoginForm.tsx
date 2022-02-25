import { Input } from "../Input/Input";
import { Button } from "../Buttons/Button";

export const LoginForm = () => {
  return (
    <>
      <Input type="email" text="Email" value="" onChange={() => {}} />
      <Input type="password" text="Password" value="" onChange={() => {}} />
      <Button text="Login" onClick={() => {}} />
    </>
  );
};
