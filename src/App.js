import React from 'react';
import { Routes, Route } from "react-router-dom";    
import Header from './components/Header';

//import './assets/stylesheets/App.scss';
import GithubInfo from './components/GithubInfo';

const App = () => {

  return (
        <div className="page-wrapper">
        <Header />
        <Routes>
            <Route path="/" element={<GithubInfo/>} />
        </Routes>
        </div>
       
  );
};

export default App;
