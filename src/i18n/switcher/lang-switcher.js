import React from 'react';
import { withLocalize } from 'react-localize-redux';
import './lang-switcher.css';

const LANG_KEY = 'lang';

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => {
    const getClass = (languageCode) => {
        return languageCode === activeLanguage.code ? 'active' : ''
    };

    if (window.localStorage.getItem(LANG_KEY)) {
        let found = languages.find(ln => ln.code === window.localStorage.getItem(LANG_KEY));
        if (found) {
            window.document.getElementsByTagName("html")[0]["lang"] = found.code;
            window.document.getElementsByTagName("body")[0]["dir"] = found.dir;
        }
    }
    return (
        <ul className="selector">
            {languages.map(lang =>
                <li key={lang.code}>
                    <button className={getClass(lang.code)} onClick={() => {
                        window.document.getElementsByTagName("html")[0]["lang"] = lang.code;
                        window.document.getElementsByTagName("body")[0]["dir"] = lang.dir;
                        window.localStorage.setItem(LANG_KEY, lang.code);
                        return setActiveLanguage(lang.code);
                    }}>{lang.name}</button>
                </li>
            )}
        </ul>
    );
};

export default withLocalize(LanguageToggle);