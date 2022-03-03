import { useContext } from "react";

import styles from "./HeaderMenu.module.css";
import { Context } from "../../App";
import { Container } from "../Container/Container";

interface IProps {
  text?: string;
  openNavBar: () => void;
}

export const HeaderMenu = ({ text = "Username", openNavBar }: IProps) => {
  const { isDark, theme } = useContext(Context);
  const isLoggedIn = true;

  return (
    <div
      style={{
        background: theme.background,
      }}
    >
      <Container>
        <div className={styles.headerMenu}>
          <img
            className={styles.burgerMenu}
            src={isDark ? "../img/MenuForDark.png" : "../img/MenuForWhite.png"}
            alt="menu"
            onClick={openNavBar}
          />
          {isLoggedIn ? (
            <div className={styles.userBox}>
              <div className={styles.userAvatar}>
                <img
                  src={isLoggedIn ? "../img/Icon_information.png" : ""}
                  alt="avatar"
                />
              </div>
              <p
                className={styles.userName}
                style={{
                  color: theme.nameText,
                }}
              >
                {text}
              </p>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
};
