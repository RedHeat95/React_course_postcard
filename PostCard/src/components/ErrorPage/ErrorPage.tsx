import { useHistory } from "react-router-dom";

import styles from "./ErrorPage.module.css";
import { Button } from "../Buttons/Button";

export const ErrorPage = () => {
  const history = useHistory();

  return (
    <div className={styles.boxError}>
      <h1>404</h1>
      <Button text="Back" onClick={() => history.goBack()} />
    </div>
  );
};
