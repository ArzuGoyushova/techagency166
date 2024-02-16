import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Filter from './Filter';
import Card from './Card';

const MostUsed = () => {
    const { t } = useTranslation('global');
    const [selectedExamType, setSelectedExamType] = useState('primarySchool');
    const [selectedTag, setSelectedTag] = useState('');
    const [numCards, setNumCards] = useState(6);

    const handleSelectExamType = (examType) => {
        setSelectedExamType(examType);
    };

    const handleSelectTag = (tag) => {
        setSelectedTag(tag);
    };

    const handleShowMore = () => {
        setNumCards(numCards + 2);
    };

    return (
        <div className="container mx-auto md:px-16 px-4">
            <div className="w-full text-center h-100 md:mt-24 mt-12">
                <p>{t('mostUsed.subTitle')}</p>
                <h1 className="text-2xl md:text-[44px] font-bold md:mt-8 mt-4 mb-16">{t('mostUsed.title')}</h1>
                <div className='w-full flex space-x-8'>
                    <div className='w-1/3'>
                        <Filter onSelectExamType={handleSelectExamType} onSelectTag={handleSelectTag} />
                    </div>
                    <div className="w-2/3">
                        <div className="grid grid-cols-2 gap-4">
                            {[...Array(numCards)].map((_, index) => (
                                <div key={index} className="w-1/2">
                                    <Card exam={selectedExamType} tag={selectedTag} />
                                </div>
                            ))}
                           
                        </div>
                        <div className="text-center my-8 mx-auto">
                                <button onClick={handleShowMore} className='border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-200'>{t('mostUsed.button')}</button>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MostUsed;
