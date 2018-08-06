import React from 'react';
import { withLocalize } from 'react-localize-redux';
import './lang-switcher.css';

const LANG_KEY = 'lang';

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => {
    const getClass = (languageCode) => {
        return languageCode === activeLanguage.code ? 'active' : ''
    };

    return (
        <ul className="selector">
            {languages.map(lang =>
                <li key={lang.code}>
                    <button className={getClass(lang.code)} onClick={() => {
                        window.localStorage.setItem(LANG_KEY, lang.code);
                        return setActiveLanguage(lang.code);
                    }}>{lang.name}</button>
                </li>
            )}
        </ul>
    );
};

export default withLocalize(LanguageToggle);