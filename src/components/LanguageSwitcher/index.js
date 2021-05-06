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
            <div>
                <img src="/images/lang/en.jpg" onClick={() => changeLanguage('en')} alt="usa flag" />
            </div>
            <div>
                <img src="/images/lang/es.png" onClick={() => changeLanguage('es')} alt="spanish flag" />
            </div>
        </div>
        </>
    )
}
