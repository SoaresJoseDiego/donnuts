import React from 'react';
import Logo from '../assets/Logo.svg';
import { SiLinkedin } from 'react-icons/si';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="footer-logo" />
                </div>
                <div className='footer-icons'>
                    <SiLinkedin />
                    <FaFacebook />
                </div>
            </div>
            <div className="footer-section-two">
                <div className='footer-section-columns'>
                    <span>Qualidade</span>
                    <span>Ajuda</span>
                    <span>Nossa Marca</span>
                    <span>Carreira</span>
                    <span>Avaliação</span>
                    <span>Nosso Trabalho</span>
                </div>
                <div className='footer-section-columns'>
                    <span>(18) 99686-2910</span>
                </div>
                <div className='footer-section-columns'>
                    <span>Termos & Condições</span>
                    <span>Politica de Privacidade</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;