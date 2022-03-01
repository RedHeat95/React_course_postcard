import { useCallback, useState } from "react";

import { validationService } from "../../services/validation";

import { Input } from "../Input/Input";
import { Button } from "../Buttons/Button";

export const RegisterForm = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inChangeUserName = useCallback((event) => {
    const value = event.target.value;
    setUserName(value);
    const error = validationService.validateName(value);
    setErrors((errors) => ({ ...errors, userName: error }));
  }, []);

  const inChangeEmail = useCallback((event) => {
    const value = event.target.value;
    setEmail(value);
    const error = validationService.validateEmail(value);
    setErrors((errors) => ({ ...errors, email: error }));
  }, []);

  const inChangePassword = useCallback((event) => {
    const value = event.target.value;
    setPassword(value);
    const error = validationService.validatePassword(value);
    setErrors((errors) => ({ ...errors, password: error }));
  }, []);

  const inChangeConfirmPassword = useCallback((event) => {
    setConfirmPassword(event.target.value);
  }, []);

  const onClick = () => {
    const errors = {
      userName: validationService.validateName(userName),
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
      confirmPassword: validationService.validateRepeatedPassword(
        password,
        confirmPassword
      ),
    };
    setErrors(errors);
  };

  return (
    <>
      <Input
        type="text"
        text="User name"
        value={userName}
        onChange={inChangeUserName}
        error={errors.userName}
      />
      <Input
        type="email"
        text="Email"
        value={email}
        onChange={inChangeEmail}
        error={errors.email}
      />
      <Input
        type="password"
        text="Password"
        value={password}
        onChange={inChangePassword}
        error={errors.password}
      />
      <Input
        type="password"
        text="Confirm password"
        value={confirmPassword}
        onChange={inChangeConfirmPassword}
        error={errors.confirmPassword}
      />
      <Button text="Login" onClick={onClick} />
    </>
  );
};
