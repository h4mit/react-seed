import React from "react";
import { withLocalize } from "react-localize-redux";
import './lang-switcher.css';


const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => (
  <ul className="selector">
    {languages.map(lang => (
      <li key={lang.code}>
        <button onClick={() => setActiveLanguage(lang.code)}>
          {lang.name}
        </button>
      </li>
    ))}
  </ul>
);

export default withLocalize(LanguageToggle);