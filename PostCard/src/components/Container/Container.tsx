import { ReactNode } from "react";

import styles from "./Container.module.css";
import { Vector } from "../Vector/Vector";

interface IProps {
  children: ReactNode;
  isImage: boolean;
}

export const Container = ({ children, isImage }: IProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>{children}</div>
      {isImage === true ? <Vector /> : null};
    </div>
  );
};
