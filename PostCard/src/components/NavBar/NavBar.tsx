import { useContext } from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";
import { Context } from "../../App";
import { Container } from "../Container/Container";
import { ToggleButton } from "../Buttons/ToggleButton/ToggleButton";

interface IProps {
  closeNavBar: () => void;
}

export const NavBar = ({ closeNavBar }: IProps) => {
  const { changeIsDark } = useContext(Context);
  // const isLoggedIn = true;
  const isLoggedIn = false;

  return (
    <div className={styles.navBarWrraper}>
      <Container>
        <div className={styles.navBar}>
          <div>
            <div className={styles.imgClose}>
              <img src="../img/Frame.png" onClick={closeNavBar} />
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
                    to="/*"
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
            <ToggleButton onClick={changeIsDark} />
          </div>
        </div>
      </Container>
    </div>
  );
};
