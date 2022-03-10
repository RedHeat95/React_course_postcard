import { useHistory } from "react-router-dom";

import styles from "./ErrorPage.module.css";
import { Button } from "../Buttons/Button/Button";
import { Container } from "../Container/Container";
import { Title } from "../Title/Title";

export const ErrorPage = () => {
  const history = useHistory();

  return (
    <Container isImage={false}>
      <div className={styles.boxError}>
        <Title text="404" />
        <Button text="Back" onClick={() => history.goBack()} />
      </div>
    </Container>
  );
};
