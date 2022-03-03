import { createContext, useState } from "react";
import { Provider } from "react-redux";

import "./App.css";
import { store } from "./redux/store";
import { RootRouter } from "./navigation/RootRouter";

export const darkTheme = {
  background: "#016EFC",
  colorOfCard: "#0060DC",
  nameText: "#FFFFFF",
  text: "#FFFFFF",
  grayText: "#FFFFFF",
  timeText: "#FFFFFF",
  button: "#ffffff",
  buttonColor: "#007bff",
};

export const lightTheme = {
  background: "#F8FAFE",
  colorOfCard: "#FFFFFF",
  nameText: "#016EFC",
  text: "#4F4F4F",
  grayText: "#979797",
  timeText: "#016EFC",
  button: "#007bff",
  buttonColor: "#ffffff",
};

export const Context = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: lightTheme,
});

export function App() {
  const [isDark, setIsDark] = useState(false);

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };
  return (
    <Provider store={store}>
      <Context.Provider
        value={{
          isDark,
          changeIsDark,
          theme: isDark ? darkTheme : lightTheme,
        }}
      >
        <div
          className="app"
          style={{
            background: isDark ? darkTheme.background : lightTheme.background,
          }}
        >
          <RootRouter />
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
