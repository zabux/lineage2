import React from 'react'
import { useTranslation } from "react-i18next";

import '../css/Features.scss';

const News = () => {
    const { t } = useTranslation()
    return (
        <section className="features-section" id="features">
            <div className="features-section__content-margin-right"></div>
            <div className="features-section__content">
                <h1 className="display-1" data-content="Features">
                    <span>News</span>
                </h1>
                <hr className="line-separator"/>
                <div className="features-accordion">
                    <div className="item-1">
                        <div className="features-accordion-title">
                            <button className="option option-1 activeted"></button>
                            <h2>Live the Story</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            {t("live-the-story")}
                            </p>
                        </div>
                    </div>
                    <div className="item-2">
                        <div className="features-accordion-title">
                            <span className="option option-2"></span>
                            <h2>Create Your Hero</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            {t("create-your-hero")}
                            </p>
                        </div>
                    </div>
                    <div className="item-3">
                        <div className="features-accordion-title">
                            <span className="option option-3"></span>
                            <h2>Advanced Combat and Raids</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            {t("advanced-combat-and-raids")}
                            </p>
                        </div>
                    </div>
                    <div className="item-3">
                        <div className="features-accordion-title">
                            <span className="option option-4"></span>
                            <h2>Massive Clan Battles</h2>
                        </div>
                        <div className="features-accordion-content">
                            <p>
                            {t("massive-clan-battles")}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default News
