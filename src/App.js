import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function App({ setLocale, locale }) {
  return (
    <div>
      <LanguageSwitcher setLocale={setLocale} locale={locale} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
