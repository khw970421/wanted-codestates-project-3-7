import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Form';
import 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forms" element={<Main />} />
        <Route path="/forms" element={<Main />} />
        <Route path="/forms" element={<Main />} />
        <Route path="/forms" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
