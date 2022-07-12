import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { AboutUs } from 'pages/AboutUs';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Layout } from 'components/Layout';
import './styles/App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<AboutUs />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="404" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
