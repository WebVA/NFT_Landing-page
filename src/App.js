import React,{lazy,Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from 'pages/details/DetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DetailsPage />}></Route>
        <Route path='*' element={<DetailsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
