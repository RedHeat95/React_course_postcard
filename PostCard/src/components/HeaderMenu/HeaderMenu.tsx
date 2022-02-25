import styles from "./HeaderMenu.module.css";

interface IProps {
  openNavBar: () => void;
}

export const HeaderMenu = ({ openNavBar }: IProps) => {
  return (
    <div className={styles.headerMenuWrraper}>
      <div className={styles.headerMenu}>
        <img
          className={styles.burgerMenu}
          src="../img/Menu.png"
          onClick={openNavBar}
        />
        <img className={styles.userAva} src="../img/Icon_information.png" />
        <p className={styles.userName}>Username</p>

        <input className={styles.input} />
      </div>
    </div>
  );
};
