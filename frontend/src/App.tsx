import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './components/main';
import Navigation from './components/navbar'
import GuidePage from './components/guide';
import AboutPage from './components/about'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={[<Navigation />, <MainPage />]}/>
        <Route path='/guide' element={[<Navigation />, <GuidePage />]}/>
        <Route path='/about' element={[<Navigation />, <AboutPage />]}/>
      </Routes>
    </Router>
  );
}

export default App;
