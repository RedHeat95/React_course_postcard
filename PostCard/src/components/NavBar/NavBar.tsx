import { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";
import { IState } from "../../redux/store";
import { ThemeContext } from "../../context/ThemeContext";

import { Container } from "../Container/Container";
import { ToggleButton } from "../Buttons/ToggleButton/ToggleButton";

interface IProps {
  closeNavBar: () => void;
}

export const NavBar = ({ closeNavBar }: IProps) => {
  const { isDark, changeIsDark } = useContext(ThemeContext);

  const isLoggedIn = useSelector(
    (state: IState) => state.authReducer.isLoggedIn
  );

  return (
    <div className={styles.navBarWrraper}>
      <Container isImage={false}>
        <div className={styles.navBar}>
          <div>
            <div className={styles.imgClose}>
              <img src="../img/frame.png" onClick={closeNavBar} />
            </div>
            <div className={isLoggedIn ? styles.userEnter : styles.userOut}>
              <NavLink
                className={styles.namePage}
                onClick={closeNavBar}
                to="/"
                exact
              >
                All Posts
              </NavLink>
              {isLoggedIn ? (
                <div className={styles.userPosts}>
                  <NavLink
                    className={styles.namePage}
                    onClick={closeNavBar}
                    to="/"
                    exact
                  >
                    My posts
                  </NavLink>

                  <NavLink
                    className={styles.namePage}
                    onClick={closeNavBar}
                    to="/addpost"
                    exact
                  >
                    + Add posts
                  </NavLink>
                </div>
              ) : (
                <div className={styles.logReg}>
                  <NavLink
                    className={styles.namePage}
                    onClick={closeNavBar}
                    to="/login"
                    exact
                  >
                    Login
                  </NavLink>

                  <NavLink
                    className={styles.namePage}
                    onClick={closeNavBar}
                    to="/login"
                    exact
                  >
                    Registration
                  </NavLink>
                </div>
              )}
            </div>
          </div>
          <div className={styles.exitBox}>
            {isLoggedIn ? (
              <NavLink
                className={styles.namePage}
                onClick={closeNavBar}
                to="/"
                exact
              >
                Log out
                <img className={styles.exit} src="../img/exit.png" alt="exit" />
              </NavLink>
            ) : (
              ""
            )}
            <ToggleButton
              inputChecked={isDark}
              onChange={() => {
                changeIsDark();
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
