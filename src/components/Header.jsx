import React, { useState } from 'react';
import { logLinks, navLinks } from '../constants/constant';
import { useTranslation } from 'react-i18next';
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from 'react-icons/ai';

const Header = () => {
  const { t } = useTranslation('global');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const { i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const handleChangeLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
    setShowLanguageOptions(false);
  };

  return (
    <header className="container mx-auto lg:px-16 px-4">
      <nav className="flex justify-between items-center my-5">
        <div>
          <h1 className='font-bold lg:text-4xl md:text-2xl text-3xl'>
            <a href="/">
            Logo
            </a>
            </h1>
        </div>
        <div className="md:flex lg:space-x-4 lg:text-[16px] md:text-sm items-center lg:ms-16 hidden flex-shrink-0">
          <ul className="list-unstyled flex items-center lg:space-x-4 font-semibold">
            {navLinks.map((link) => (
              <li key={link.id} className="rounded-lg p-1 hover:bg-gray-100">
                <a className="p-2" href={"#" + link.id}>
                  {t(`${link.title}`)}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowLanguageOptions(!showLanguageOptions)}
              className="text-m text-black font-semibold flex items-center justify-center space-x-1 p-1 rounded-lg transition duration-300 hover:bg-gray-100"
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

        <ul className="list-unstyled text-xs lg:text-[16px] hidden md:flex items-center space-x-4 font-semibold flex-shrink-0">

          {logLinks.map((logLink) => (
            <li
              key={logLink.id}
              className={`${logLink.id === "register" ? "bg-black text-white hover:bg-gray-100 hover:text-black" : "hover:bg-gray-100"} rounded-lg border py-3 px-4`}
            >
              <a href={logLink.id}>{t(`${logLink.title}`)}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden relative">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <AiOutlineClose className='z-40 absolute right-0 top-0 text-white' /> : <AiOutlineMenu />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 right-0 w-60 h-screen flex justify-center items-center bg-black bg-opacity-80 z-10">
          <ul className="list-unstyled text-white space-y-4 text-center">
            {navLinks.map((link, index) => (
              <li key={index} className="rounded-lg hover:bg-gray-100 hover:text-black">
                <a className="p-2" href={"#" + link.id}>{t(`${link.title}`)}</a>
              </li>
            ))}

            <li className="rounded-lg hover:bg-gray-100">
              <button
                type="button"
                onClick={() => handleChangeLanguage(currentLanguage === 'az' ? 'en' : 'az')}
                className="text-sm text-white hover:text-black hover:bg-gray-100 px-2 rounded-xl transition duration-300"
              >
                {currentLanguage === 'az' ? 'AZ' : 'ENG'}
              </button>
            </li>

            {logLinks.map((logLink) => (
              <li
                key={logLink.id}
                className={`${logLink.id === "register" ? "bg-black text-white hover:bg-gray-100 hover:text-black" : "hover:bg-gray-100"} rounded-lg border py-2 px-4`}
              >
                <a href={logLink.id}>{t(`${logLink.title}`)}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );

};

export default Header;