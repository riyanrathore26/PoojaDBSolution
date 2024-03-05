// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './component/AdminPage';
import Home from './component/Home';
import Service from './component/Service';
import SpasubCat from './component/SpasubCat';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Service/:productId" element={<Service />} />
          <Route path="/Service/sub/:productId" element={<SpasubCat />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
