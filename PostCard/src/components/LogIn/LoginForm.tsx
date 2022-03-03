import { useCallback, useState } from "react";

import { validationService } from "../../services/validation";

import { Input } from "../Input/Input";
import { Button } from "../Buttons/Button/Button";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const onChangeEmail = useCallback((event) => {
    const value = event.target.value;
    setEmail(value);

    const error = validationService.validateEmail(value);

    setErrors((errors) => ({ ...errors, email: error }));
  }, []);

  const onChangePassword = useCallback((event) => {
    const value = event.target.value;
    setPassword(value);

    const error = validationService.validatePassword(value);

    setErrors((errors) => ({ ...errors, password: error }));
  }, []);

  const onClick = () => {
    const errors = {
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
    };
    setErrors(errors);
  };

  return (
    <>
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={onChangeEmail}
        error={errors.email}
      />
      <Input
        type="password"
        label="Password"
        value={password}
        onChange={onChangePassword}
        error={errors.password}
      />
      <Button text="Login" onClick={onClick} />
    </>
  );
};
