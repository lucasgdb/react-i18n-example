import "./App.css";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import reactLogo from "./assets/react.svg";
import i18n from "./i18n/i18n";

function App() {
  const [language, setLanguage] = useState("ptBR");
  const [count, setCount] = useState(0);

  const { t } = useTranslation();

  const handleCount = () => setCount((count) => count + 1);

  const handleChangeLanguage = () => {
    if (language === "ptBR") {
      i18n.changeLanguage("enUS");
      setLanguage("enUS");
      return;
    }

    i18n.changeLanguage("ptBR");
    setLanguage("ptBR");
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
          className="change-language-button"
        >
          {t("change to")}{" "}
          {language === "ptBR" ? t("english") : t("portuguese")}
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
