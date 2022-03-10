import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import styles from "./ConfirmEmail.module.css";
import { IState } from "../../redux/store";
import { Title } from "../Title/Title";
import { Button } from "../Buttons/Button/Button";
import { Container } from "../Container/Container";

export const ConfirmEmail = () => {
  const email = useSelector((state: IState) => state.authReducer.email);

  const history = useHistory();

  return (
    <Container isImage={true}>
      <div className={styles.confirm}>
        <Title text="Registration Confirmation" />
        <div className={styles.confirmBoxText}>
          <p className={styles.confirmText}>
            Please activate your account with
          </p>
          <p className={styles.confirmText}>
            the activation link in the email
            <a href="/" className={styles.send}>
              {email}
            </a>
          </p>
          <p className={styles.confirmText}>Please, check your email</p>
        </div>
        <Button text="Home" onClick={() => history.goBack()} />
      </div>
    </Container>
  );
};
