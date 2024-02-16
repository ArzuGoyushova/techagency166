import React from 'react';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation('global');

  return (
    <div className="relative flex">
      <div className="w-full">
        <img src="./images/banner.png" className="w-full md:h-full h-64 object-cover" alt="Banner" />
      </div>
      <div className="absolute md:left-32 lg:left-36 md:top-60 top-8 md:text-start text-center">
        <h1 className="text-white text-2xl md:text-[44px] font-bold px-4 pt-4">{t('banner.exams')}</h1>
        <p className='text-white md:mt-4 mt-1 md:max-w-3xl md:text-lg px-4'>{t('banner.description')}</p>
      </div>
    </div>
  );
};

export default Banner;
