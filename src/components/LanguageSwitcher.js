import React from 'react';
import { Button } from 'react-bootstrap';

const LanguageSwitcher = ({ locale, setLocale }) => {
  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'es' : 'en');
  };

  return (
    <div style={{ position: 'absolute', top: 10, right: 10 }}>
      <Button onClick={toggleLocale}>
        {locale === 'en' ? 'Cambiar a Español' : 'Switch to English'}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
