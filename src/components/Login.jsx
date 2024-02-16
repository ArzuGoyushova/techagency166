import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t } = useTranslation('global');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg p-8 shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">{t('login.title')}</h2>
                <input
                    type="text"
                    placeholder={t('login.username')}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder={t('login.password')}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mb-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="w-full bg-gray-900 text-white rounded-md py-2 font-semibold"
                    onClick={handleLogin}
                >
                    {t('login.title')}
                </button>
            </div>
        </div>
    );
};

export default Login;
