import { createContext, ReactNode, useEffect, useState } from "react";

const darkTheme = {
  background: "#016EFC",
  colorOfCard: "#0060DC",
  nameText: "#FFFFFF",
  text: "#FFFFFF",
  grayText: "#FFFFFF",
  timeText: "#FFFFFF",
  button: "#ffffff",
  buttonColor: "#007bff",
};

const lightTheme = {
  background: "#F8FAFE",
  colorOfCard: "#FFFFFF",
  nameText: "#016EFC",
  text: "#4F4F4F",
  grayText: "#979797",
  timeText: "#016EFC",
  button: "#007bff",
  buttonColor: "#ffffff",
};

export const ThemeContext = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: lightTheme,
});

interface IProps {
  children: ReactNode;
}

export const ThemeProdiver = ({ children }: IProps) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{ isDark, changeIsDark, theme: isDark ? darkTheme : lightTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
