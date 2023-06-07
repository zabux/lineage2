import React, { useState, useContext } from 'react';
import { useTranslation } from "react-i18next";
import { MouseContext } from "../context/mouse-context";
import Scroll from 'react-scroll';
import '../css/Header.scss';
import { lineage2Black } from '../utils/Images';
import '../css/Navbar.scss';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleLang, setToggleLang] = useState(false);
    const [toggleMenuScroll, setToggleMenuScroll] = useState(false);
    const [toggleSkewMenu, settoggleSkewMenu] = useState(false);
    const { cursorChangeHandler } = useContext(MouseContext);
    const ScrollLink = Scroll.Link;
    const handleToggleMenu = () =>{
        setToggleMenu(!toggleMenu);
        settoggleSkewMenu(!toggleSkewMenu);
    };

    const handleToggleLangContainer = () => {
        setToggleLang(!toggleLang);
    }

    const { i18n } = useTranslation();
    const handleLangChange = (code) => {
        i18n.changeLanguage(code)
    }
    document.addEventListener('scroll', ()=>{
        if (window.scrollY > 600) {
            setToggleMenuScroll(true);
        }else{
            setToggleMenuScroll(false);
        }
    });

    return (
        <div className="nav-container m-auto">
            <nav className="navbar">
                <ScrollLink to="main" className="logo">
                    <img src={lineage2Black} alt="Logo" className="logo"/>
                </ScrollLink>
                <div className={`menu-toggle ${toggleMenu ? 'is-active':''}
                ${toggleMenuScroll ? 'scrolled':''} ${toggleSkewMenu ? 'active':''}`}
                id="mobile-menu" onClick={handleToggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-menu ${toggleMenu ? 'active showMenu':''}`}>
                    <li >
                        <ScrollLink
                            to="main"
                            className="nav-links active-link"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >Main</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="about"
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                        About</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="features"
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                        Features</ScrollLink >
                    </li>
                    <li>
          <Link to="/news">News</Link>
        </li>
                    <li>
                        <ScrollLink
                            to="systemrequirements"
                            className="nav-links"
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                        System Requirements</ScrollLink>
                    </li>
                </ul>
                <div className="lang-container">
                    <div className="current-lang">
                        <span className="current-lang__name">{i18n.language.toUpperCase()}</span>
                        <span
                            className="current-lang__toggle"
                            onClick={handleToggleLangContainer}
                        >
                            <i className="uil uil-angle-down"></i>
                        </span>
                    </div>
                    <div className={`lang-option ${toggleLang ? "active" : ""}`}>
                        <span
                            className="lang-id"
                            onClick={() => handleLangChange("id")}
                        >ID</span>
                        <span
                            className="lang-en"
                            onClick={() => handleLangChange("en")}
                        >EN</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
