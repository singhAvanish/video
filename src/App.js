import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';
import Editor from './components/Editor'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/editor" element={<Editor />} /> 
          <Route path="/video" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;