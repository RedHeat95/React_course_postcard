import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "../Container/Container";

import styles from "./LogIn.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const LogIn = () => {
  const { theme } = useContext(ThemeContext);

  const location = useLocation();

  const [isLogged, setIsLogged] = useState(location.pathname.includes("login"));

  useEffect(() => {
    setIsLogged(location.pathname.includes("login"));
  }, [location.pathname]);

  const switchForm = (value: boolean) => {
    setIsLogged(value);
  };

  return (
    <Container isImage={true}>
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <div className={styles.formTitle}>
            <p
              className={isLogged ? `${styles.active}` : `${styles.inactive}`}
              onClick={() => switchForm(true)}
            >
              Login
            </p>
            <p className={styles.borderline}>|</p>
            <p
              className={isLogged ? `${styles.inactive}` : `${styles.active}`}
              onClick={() => switchForm(false)}
            >
              Registration
            </p>
          </div>
          {isLogged ? <LoginForm /> : <RegisterForm />}
        </div>
        {isLogged ? (
          <p className={styles.formText} style={{ color: theme.text }}>
            Forgot your password?
            <a style={{ color: theme.timeText }} href="/login">
              Reset password
            </a>
          </p>
        ) : (
          <p className={styles.formText} style={{ color: theme.text }}>
            If you have account, you can
            <a style={{ color: theme.timeText }} href="/login">
              login
            </a>
          </p>
        )}
      </div>
    </Container>
  );
};
