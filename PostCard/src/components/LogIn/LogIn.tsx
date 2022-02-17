import styles from "./LogIn.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const LogIn = () => {
  const location = useLocation();

  const [isLogged, setIsLogged] = useState(location.pathname.includes("login"));

  useEffect(() => {
    setIsLogged(location.pathname.includes("login"));
  }, [location.pathname]);

  const switchForm = (value: boolean) => {
    setIsLogged(value);
  };

  return (
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
  );
};
