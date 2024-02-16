import React from 'react';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation('global');

  return (
    <div className="container mx-auto md:px-16 px-4">
      <div className="w-full md:flex md:justify-between items-center bg-black lg:h-[400px] md:h-[300px] rounded-lg md:px-16 px-4 pt-8 md:pt-0 relative">
        <div className='md:w-2/3'>
          <h1 className="text-3xl font-bold mb-8 text-white">{t('cardDetails.title')}</h1>
          <ul style={{ listStyleType: 'disc', }} className='ms-6 my-4 text-white text-xs space-y-4 mb-8'>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, quod.</li>
            <li>Perspiciatis facilis exercitationem ipsam deleniti!</li>
            <li>Laborum eaque quia tenetur temporibus aliquid consectetur quaerat fugit?</li>
          </ul>
          <button className='border w-64 bg-white w-full py-2 rounded-lg font-semibold hover:bg-gray-200'>
            {t('cardDetails.button')}
          </button>
        </div>
        <div className='md:w-1/2 lg:h-full flex lg:items-end md:items-center -mt-16 lg:mt-0'>
          <img src="./images/bannerVector.png" className="w-full md:w-[90%]" alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
