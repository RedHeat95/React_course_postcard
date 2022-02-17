import styles from "./NavBar.module.css";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { NavLink } from "react-router-dom";
import { ButtonTogle } from "../Buttons/Button";

interface IProps {
  closeNavBar: () => void;
}

export const NavBar = ({ closeNavBar }: IProps) => {
  const { changeIsDark } = useContext(Context);
  return (
    <div className={styles.navBar}>
      <div>
        <div className={styles.imgClose}>
          <img src="../img/Frame.png" onClick={closeNavBar} />
        </div>
        <div className={styles.logReg}>
          <NavLink
            className={styles.allPosts}
            onClick={closeNavBar}
            to="/"
            exact
          >
            All Posts
          </NavLink>

          <NavLink
            className={styles.log}
            onClick={closeNavBar}
            to="/login"
            exact
          >
            Login
          </NavLink>

          <NavLink
            className={styles.reg}
            onClick={closeNavBar}
            to="/registartion"
            exact
          >
            Registration
          </NavLink>
        </div>
      </div>

      <ButtonTogle onClick={changeIsDark} />
    </div>
  );
};
