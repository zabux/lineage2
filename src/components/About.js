import React from 'react'
import { useTranslation } from "react-i18next";
import SliderAbout from './SliderAbout';
import '../css/About.scss';

const About = () => {
    const { t } = useTranslation()
    return (
        <section className="about-section" id="about">
            <div className="about-section__left">
                <h1 className="display-1" data-content="Enter the lore of Lineage II">
                    <span>
                        Enter the lore of Lineage II
                    </span>
                </h1>
                <hr className="line-separator"/>
                <div className="text-container">
                    <p className="about-text-info">
                        {t("about")}
                    </p>
                </div>
            </div>
            <div className="about-section__right">
                <SliderAbout/>
            </div>
        </section>
    )
}

export default About
