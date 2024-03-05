// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './component/AdminPage';
import Home from './component/Home';
import Post from './component/Post'; // Import the Post component
import Service from './component/Service';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AdminPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Service/:productId" element={<Service />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
