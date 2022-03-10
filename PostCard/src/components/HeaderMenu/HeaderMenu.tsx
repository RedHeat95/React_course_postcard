import { useContext } from "react";
import { useSelector } from "react-redux";

import styles from "./HeaderMenu.module.css";
import { IState } from "../../redux/store";
import { Container } from "../Container/Container";
import { ThemeContext } from "../../context/ThemeContext";

interface IProps {
  text?: string;
  openNavBar: () => void;
}

export const HeaderMenu = ({ text = "Username", openNavBar }: IProps) => {
  const { isDark, theme } = useContext(ThemeContext);

  const { isLoggedIn, username } = useSelector(
    (state: IState) => state.authReducer
  );

  return (
    <div
      className={styles.header}
      style={{
        background: theme.background,
      }}
    >
      <Container isImage={false}>
        <div className={styles.headerMenu}>
          <img
            className={styles.burgerMenu}
            src={isDark ? "../img/menuForDark.png" : "../img/menuForWhite.png"}
            alt="menu"
            onClick={openNavBar}
          />
          {isLoggedIn ? (
            <div className={styles.userBox}>
              <div className={styles.userAvatar}>
                <img
                  src={isLoggedIn ? "../img/iconInformation.png" : ""}
                  alt="avatar"
                />
              </div>
              <p
                className={styles.userName}
                style={{
                  color: theme.nameText,
                }}
              >
                {username}
              </p>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
};
