import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Register = () => {
    const { t } = useTranslation('global');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">{t('register.title')}</h2>
        <input
          type="text"
          placeholder={t('register.username')}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder={t('register.email')}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder={t('register.password')}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          <input
          type="password"
          placeholder={t('register.confirmPassword')}
          className="w-full border border-gray-300 rounded-md py-2 px-3 mb-6"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          className="w-full bg-gray-900 text-white rounded-md py-2 font-semibold"
          onClick={handleRegister}
        >
          {t('register.title')}
        </button>
      </div>
    </div>
  );
};

export default Register;
