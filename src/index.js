import React from 'react';
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import App from './App';
import MouseContextProvider from "./context/mouse-context";

// language
import langID from "./locales/id.json"
import langEN from "./locales/en.json"

i18n.use(initReactI18next).init({
  lng: "id",
  resources: {
    id: {
      translation: langID
    },
    en: {
      translation: langEN
    }
  },
  fallbackLng: "id",
  interpolating: {
    escapeValue: false
  }
})
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </React.StrictMode>
)
/*
ReactDOM.render(
  <React.StrictMode>
    <MouseContextProvider>
      <App /> 
    </MouseContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);*/
