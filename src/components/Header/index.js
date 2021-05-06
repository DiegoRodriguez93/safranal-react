import React, { useState } from 'react';
import ham from './ham.png';
import hamX from './ham-x.png';
import { NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Header = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = ({value}) => { 

        if(i18n.language === value){
            return false
        }

        document.getElementsByClassName('loading')[0].style.display = 'block';
        
        i18n.changeLanguage(value); 

        setTimeout(()=>{
            document.getElementsByClassName('loading')[0].style.display = 'none';
        },450);
    
    }

    const ARREN = [{ value: 'en', label: 'English' }, { value: 'es', label: 'Spanish' }];
    const ARRES = [{ value: 'en', label: 'Inglés' }, { value: 'es', label: 'Español' }];

    const options = i18n.language === 'en' ? ARREN : ARRES;
    const defaultOption = i18n.language === 'en' ? options[0] :  options[1];


    const [ mobileMenuVisibility, setMobileMenuVisibility ] = useState('none');

    const handleDisplayNone = () => {
        setMobileMenuVisibility('none');
    }

    const isActive = {
        textDecoration:'underline'
      };

    const isActiveInMobile = {
        textDecoration:'line-through'
      };

    return (
        <header>
            <div className="container">
                <div className="row" style={{flexWrap: 'nowrap'}}>
                    <div className="col-lg-2 sm-6">
                        <h1>PaellasTo<br/>GoMiami</h1>
                    </div>
                    <nav className="col-lg-10 menu ordenador">
                        <NavLink exact className="menu-link" activeStyle={isActive} to="/">{t("home")}</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/menu">{t("menu")}</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/order-online">{t("orderonline")}</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/chef">CHEF</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/about">{t("about")}</NavLink>
                        <NavLink className="menu-link" activeStyle={isActive} to="/contact">{t("contact")}</NavLink>
                    </nav>
                    <div className="col-sm-6 mobile">
                        <img src={ham} onClick={()=>{setMobileMenuVisibility('block')}} className="ham-icon" alt="ham-open" />
                        <Dropdown options={options}  onChange={(e) => changeLanguage(e)}  value={defaultOption} placeholder="Select an option" />
                    </div>
                </div>
            </div>

            <div className="container-fluid mobile-menu" style={{display:mobileMenuVisibility}}>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">

                        <img src={hamX} onClick={handleDisplayNone} className="ham-icon" alt="ham-close" />
                    </div>
                    <div className="col-12">
                        <NavLink exact onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/">{t("home")}</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/menu">{t("menu")}</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/order-online">{t("orderonline")}</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/chef">CHEF</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/about">{t("about")}</NavLink>
                        <NavLink onClick={handleDisplayNone} activeStyle={isActiveInMobile} className="menu-link-mobile" to="/contact">{t("contact")}</NavLink>
                    </div>
                </div>
            </div>

        </header>
    )

}

export default Header;