import { useState } from "react";

import styles from "./Header.module.css";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { NavBar } from "../NavBar/NavBar";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const openNavBar = () => {
    setIsActive(!isActive);
  };

  const closeNavBar = () => {
    setIsActive(false);
  };

  return (
    <nav className={styles.header}>
      <HeaderMenu openNavBar={openNavBar} />
      {isActive ? <NavBar closeNavBar={closeNavBar} /> : null}
    </nav>
  );
};
