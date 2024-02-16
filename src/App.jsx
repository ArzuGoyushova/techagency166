import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Exam from './pages/Exam';
import ExamDetails from './pages/ExamDetails';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className='montserrat'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Exam />} />
            <Route path="exam" element={<Exam />} />
            <Route path="exam-details" element={<ExamDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
