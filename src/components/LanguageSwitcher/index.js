import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import './../../styles/loader.css';

export default function LanguageSwitcher() {

    const { i18n } = useTranslation();

    const [loading, setLoading] = useState('none');

    const changeLanguage = lng => { 

        if(i18n.language === lng){
            return false
        }

        setLoading('block');
        
        i18n.changeLanguage(lng); 

        setTimeout(()=>{
            setLoading('none');
        },450);
    
    }

    return (<>
        <div className="loading" style={{display:loading}}></div>
        <div className="language-switcher ordenador">
            <div className="language-box" onClick={() => changeLanguage('en')}>
                {/* <img src="/images/lang/en.jpg" onClick={() => changeLanguage('en')} alt="usa flag" /> */}
                <h4>English</h4>
            </div>
            <div className="language-box" onClick={() => changeLanguage('es')}>
                <h4>Spanish</h4>
                {/* <img src="/images/lang/es.png" onClick={() => changeLanguage('es')} alt="spanish flag" /> */}
            </div>
        </div>
        </>
    )
}
