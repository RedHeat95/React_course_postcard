import styles from "./Input.module.css";

interface IProps {
  type: string;
  text: string;
  value: string;
  onChange: () => void;
}

export const Input = ({ type, text, value, onChange }: IProps) => {
  return (
    <div className={styles.inputBox}>
      <p className={styles.inputName}>{text}</p>

      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
