import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { examTypes } from '../../constants/constant';

const Filter = ({ onSelectExamType, onSelectTag }) => {
    const { t } = useTranslation('global');
    const [selectedExamType, setSelectedExamType] = useState('primarySchool');
    const [examTypesState, setExamTypesState] = useState(examTypes);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const selectedTypeIndex = examTypesState.findIndex((type) => type.id === selectedExamType);
        const updatedExamTypes = [
            examTypesState[selectedTypeIndex],
            ...examTypesState.slice(0, selectedTypeIndex),
            ...examTypesState.slice(selectedTypeIndex + 1)
        ];
        const selectedType = examTypes.find(type => type.id === selectedExamType);
        
        if (selectedType) {
            setTags(selectedType.types);
            onSelectTag(selectedType.types[0]);
        }
        setExamTypesState(updatedExamTypes);
    }, [selectedExamType]); 

    const handleSelectExamType = (id) => {
        setSelectedExamType(id);
        onSelectExamType(id);
    };

    const handleSelectTag = (tag) => {
        onSelectTag(tag);
    };

    return (
        <div className="w-full bg-gray-50 rounded-lg pb-8">
            <h3 className='font-bold text-start px-6 py-6 text-lg'>Filter</h3>
            <p className='text-start px-6 pb-4'>{t('mostUsed.category')}</p>
            <div className="mx-6">
                {examTypesState.map(({ id, title }) => (
                    <div 
                        key={id} 
                        className={`rounded-lg p-3 text-start my-2 cursor-pointer hover:bg-gray-200 hover:text-black ${selectedExamType === id ? 'bg-black text-white' : 'bg-gray-100'}`}
                        onClick={() => handleSelectExamType(id)}
                    >
                        {t(`${title}`)}
                    </div>
                ))}
            </div>
            <p className='text-start px-6 pb-4 mt-12'>{t('mostUsed.tags')}</p>
            <div className="mx-6">
                {tags.map((tag, index) => (
                    <div 
                        key={index} 
                        className={`rounded-lg p-3 text-start my-2 cursor-pointer hover:bg-gray-200 hover:text-black ${index===0 ? 'bg-black text-white' : 'bg-gray-100'}`}
                        onClick={() => handleSelectTag(tag)}
                    >
                        {t(`${tag}`)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
