import { useContext } from "react";
import { Provider } from "react-redux";

import "./App.css";
import { store } from "./redux/store";
import { RootRouter } from "./navigation/RootRouter";
import { ThemeContext } from "./context/ThemeContext";

export function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Provider store={store}>
      <div
        className="App"
        style={{
          background: theme.background,
        }}
      >
        <RootRouter />
      </div>
    </Provider>
  );
}

export default App;
