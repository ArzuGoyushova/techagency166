import React, { useState } from 'react';
import { navLinks } from '../constants/constant';
import { useTranslation } from 'react-i18next';
import { AiOutlineDown, AiFillInstagram } from 'react-icons/ai';
import { MdFacebook, MdMail, MdPhone } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    const { t } = useTranslation('global');
    const { i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const [showLanguageOptions, setShowLanguageOptions] = useState(false);

    const handleChangeLanguage = (newLanguage) => {
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
        setShowLanguageOptions(false);
    };

    return (
        <footer className="pt-12 bg-gray-50">
            <div className="container mx-auto md:px-16 px-4 ">
                <div className='flex md:justify-between justify-around items-center'>
                    <div>
                        <h1 className='font-bold lg:text-4xl md:text-2xl md:me-4'>
                            <a href="/">
                                Logo
                            </a>
                        </h1>
                    </div>
                    <div className="md:flex md:space-x-4 items-center">
                        <ul className="list-unstyled md:flex items-center md:space-x-4 font-semibold flex-shrink-0">
                            {navLinks.map((link) => (
                                <li key={link.id} className="rounded-lg p-1 hover:bg-gray-100">
                                    <a className="p-2" href={"#" + link.id}>
                                        {t(`${link.title}`)}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-gray-200 px-2 ms-2 rounded-lg w-16 ">
                            <button
                                type="button"
                                onClick={() => setShowLanguageOptions(!showLanguageOptions)}
                                className="mt-2 md:mt-0 text-sm text-black font-semibold flex items-center justify-center space-x-1 p-1 rounded-lg transition duration-300 hover:bg-gray-100"
                            >
                                <span>{currentLanguage === 'az' ? 'AZ' : 'ENG'}</span>
                                <AiOutlineDown />
                            </button>
                            {showLanguageOptions && (
                                <ul className="absolute mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                    <li>
                                        <button
                                            type="button"
                                            onClick={() => handleChangeLanguage('az')}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            AZ
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            onClick={() => handleChangeLanguage('en')}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            ENG
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div className='mt-16 space-y-4'>
                    <a href="mailto:numune@gmail.com" className='flex items-center justify-center md:justify-start space-x-4'>
                        <span className='bg-gray-200 p-1 rounded-full'><MdMail size={20} /></span>
                        <span className='text-sm'>Nümunə@gmail.com</span>
                    </a>
                    <a href="tel:0000000000" className='flex items-center space-x-4 justify-center md:justify-start'>
                        <span className='bg-gray-200 p-1 rounded-full'><MdPhone size={20} /></span>
                        <span className='text-sm'>000 000 00 00</span>
                    </a>
                </div>
                <div className='mt-8 space-y-4'>
                    <div className='flex md:justify-end justify-center items-center space-x-4'>
                        <a href='https://www.instagram.com/' target='_blank' className='bg-gray-200 p-1 rounded-full'><AiFillInstagram size={20} /></a>
                        <a href='https://www.facebook.com/' target='_blank' className='bg-gray-200 p-1 rounded-full'><MdFacebook size={20} /></a>
                        <a href='https://www.whatsapp.com/' target='_blank' className='bg-gray-200 p-1 rounded-full'><IoLogoWhatsapp size={20} /></a>
                        <a href='https://www.telegram.com/' target='_blank' className='bg-gray-200 p-1 rounded-full'><FaTelegram size={20} /></a>
                    </div>
                </div>
                <hr className='mt-6 pb-4' />
                <div className='pb-4 space-y-4 text-center md:text-start'>
                    <p>&copy; 2024 Şirkətin adı. Bütün hüquqlar qorunur </p>
                </div>
            </div>

        </footer>
    );
}
export default Footer;