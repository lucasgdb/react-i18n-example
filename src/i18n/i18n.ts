import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import enUS from "./trans/en-US.json";
import ptBR from "./trans/pt-BR.json";

const resources = {
  enUS: {
    translation: enUS,
  },
  ptBR: {
    translation: ptBR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ptBR",
  fallbackLng: "ptBR",
});

export default i18n;
