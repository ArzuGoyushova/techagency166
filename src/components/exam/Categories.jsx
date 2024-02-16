import React from 'react';
import { useTranslation } from 'react-i18next';
import { examTypes } from '../../constants/constant';

const Categories = () => {
    const { t } = useTranslation('global');

    return (
        <div className="container mx-auto md:px-16 px-4">
            <div className="w-full text-center h-100 md:mt-24 mt-12">
                <p>{t('categories.titles.subTitle')}</p>
                <h1 className="text-2xl lg:text-[44px] md:text-2xl font-bold md:mt-8 mt-4">{t('categories.titles.title')}</h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:w-2/3 md:w-1/2 my-12 md:mx-auto ms-4">
                    {examTypes.map(({ id, title }) => (
                        <a key={id} href="/" className="rounded-lg shadow-md border p-4 text-center h-[100px] w-[160px] bg-gray-50 flex justify-center items-center font-bold cursor-pointer hover:bg-gray-200">{t(`${title}`)}</a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
