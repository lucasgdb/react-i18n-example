import "./App.css";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  const { t, i18n } = useTranslation();

  const handleCount = () => setCount((count) => count + 1);

  const handleChangeLanguage = () => {
    if (i18n.language === "ptBR") {
      i18n.changeLanguage("enUS");
      return;
    }

    i18n.changeLanguage("ptBR");
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>

        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>{t("Welcome to React")}</h1>

      <div className="card">
        <button onClick={handleCount}>
          {t("count is")} {count}
        </button>

        <button
          onClick={handleChangeLanguage}
          className="switch-language-button"
        >
          {t("change to")}{" "}
          {i18n.language === "ptBR" ? t("english") : t("portuguese")}
        </button>

        <p>
          {t("Edit")} <code>src/App.tsx</code> {t("and save to test HMR")}
        </p>
      </div>

      <p className="read-the-docs">
        {t("Click on the Vite and React logos to learn more")}
      </p>
    </div>
  );
}

export default App;
