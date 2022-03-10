import { useState, useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import styles from "./AddPost.module.css";
import { Container } from "../Container/Container";
import { Title } from "../Title/Title";
import { Input } from "../Input/Input";
import { Button } from "../Buttons/Button/Button";

export const AddPost = () => {
  const { theme } = useContext(ThemeContext);

  const [title, setTitle] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [text, setText] = useState<string>("");

  return (
    <>
      <div className={styles.addPostIndex}>
        <Container isImage={false}>
          <div className={styles.addPostWrraper}>
            <Title text="Add new post" />
            <div className={styles.addPost}>
              <div className={styles.addText}>
                <Input type="text" label="Title" value={title} />
                <Input type="text" label="Lesson number" value={number} />
                <p className={styles.addName} style={{ color: theme.text }}>
                  Text
                </p>
                <textarea className={styles.textarea}></textarea>
              </div>
              <div className={styles.addImg}>
                <p className={styles.addName} style={{ color: theme.text }}>
                  Image
                </p>
                <div className={styles.addBtn}>
                  <Button text="Add" onClick={() => {}}></Button>
                </div>
              </div>
            </div>
            <div className={styles.addManeBtn}>
              <Button text="Add" onClick={() => {}}></Button>
            </div>
          </div>
        </Container>
      </div>
      <img
        src="../img/vectorForAdd.png"
        alt="vectorForAdd"
        className={styles.img}
      />
    </>
  );
};
