import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../css/ContentHero.scss';


const ContentHero = () => {
    const { t } = useTranslation()
    useEffect(() =>{
        Aos.init();
    }, []);

    return (
        <div
            data-aos="fade-up"
        >
            <div className="hero-content">
                <h1 className="hero-content__title-1" data-content="Enter the World of Lineage II">
                    <span>
                    Enter the World of Lineage II
                    </span>
                </h1>
                {/* <h1 className="hero-content__title-1">
                    SURVIVE AT ALL COSTS
                </h1> */}
                <h4 className="hero-content__title-2">{t("introduction")}</h4>
            </div>
        </div>
    )
}

export default ContentHero;
