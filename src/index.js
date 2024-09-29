import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import enMessages from './components/locales/en.json';
import esMessages from './components/locales/es.json';

const messages = {
  en: enMessages,
  es: esMessages,
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const Main = () => {
  const [locale, setLocale] = useState('en');

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <App setLocale={setLocale} locale={locale} />
    </IntlProvider>
  );
};

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
