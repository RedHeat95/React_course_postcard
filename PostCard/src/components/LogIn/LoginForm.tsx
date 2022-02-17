import { Input } from "../Input/Input";
import { Button } from "../Buttons/Button";

export const LoginForm = () => {
  return (
    <div>
      <Input type="email" text="Email" value="" onChange={() => {}} />
      <Input type="password" text="Password" value="" onChange={() => {}} />
      <Button text="Login" onClick={() => {}} />
      <p>
        Forgot your password? <a href="">Reset password</a>
      </p>
    </div>
  );
};
