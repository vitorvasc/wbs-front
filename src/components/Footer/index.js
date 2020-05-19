import React from 'react';

import './styles.scss';

import LogoAdrp from './assets/Adrp-Logo.png';
import LogoDiscord from './assets/Discord-Logo.png';
import LogoWbs from './assets/Wbs-Logo.png';
import { ReactComponent as TopIcon } from './assets/top.svg';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <footer id="main-footer">
        <div className="container">
            <div className="row">
                <div className="col s12 l6 about">
                    <p>O Wealth Bank of Switzerland é uma empresa fictícia criada para contribuir com o cenário interpretativo do Advanced Roleplay (https://advanced-roleplay.com.br) sem fins lucrativos.</p>
                    <p>Qualquer semelhança com a realidade é pura coincidência e definitivamente não proposital.</p>
                </div>
                <div className="col s12 l3 push-l3 links">
                    <div className="row">
                        <div className="row">
                            <div className="col s4">
                                <a href="https://discord.gg/hH24xqW" target="_blank" rel="noopener noreferrer">
                                    <img src={LogoDiscord} alt="Discord" />
                                </a>
                            </div>
                            <div className="col s4">
                                <a href="https://advanced-roleplay.com.br" target="_blank" rel="noopener noreferrer">
                                    <img src={LogoAdrp} alt="Advanced-Roleplay" />
                                </a>
                            </div>
                            <div className="col s4">
                                <a href="https://forum.advanced-roleplay.com.br/viewtopic.php?f=876&t=86504" target="_blank" rel="noopener noreferrer">
                                    <img src={LogoWbs} alt="WBS" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l6 copyright">
                    <p>© Wealth Bank of Switzerland & Co. 2020</p>
                </div>
                <div className="col s12 l3 push-l3 credits">
                    <p>Idealizado e desenvolvido por<br />Victor Ferraresi e Vitor Vasconcellos</p>
                </div>
            </div>

            <div className="top">
                <TopIcon onClick={scrollToTop} />
            </div>
        </div>
    </footer >
};

export default Footer;