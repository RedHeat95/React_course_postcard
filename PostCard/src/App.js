import { createContext, useState } from "react";
import { Provider } from "react-redux";

import "./App.css";
import { store } from "./redux/store";
import { RootRouter } from "./navigation/RootRouter";

export const Context = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: {},
});

const darkTheme = {
  text: "#FFFFFF",
  grayText: "#FFFFFF",
  timeText: "#FFFFFF",
  colorOfCard: "#016EFC",
  backgroundColor: "#0060DC",
  filter: "brightness(0) invert(1)",
};

const lightTheme = {
  text: "#4F4F4F",
  grayText: "#979797",
  timeText: "#016EFC",
  colorOfCard: "#FFFFFF",
  backgroundColor: "#F8FAFE",
  filter: "none",
};

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
          style={{
            background: isDark
              ? darkTheme.backgroundColor
              : lightTheme.backgroundColor,
          }}
        >
          <RootRouter />
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
