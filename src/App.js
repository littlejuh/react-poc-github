import React from 'react';
import { Routes, Route } from "react-router-dom";    
import Header from './components/Header';

//import './assets/stylesheets/App.scss';
import SearchInfoForm from './components/SearchInfoForm';

const App = () => {

  return (
        <div className="page-wrapper">
        <Header />
        <Routes>
            <Route path="/" element={<SearchInfoForm/>} />
        </Routes>
        </div>
       
  );
};

export default App;
