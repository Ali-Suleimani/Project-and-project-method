import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomepagePresenter from './components/presenters/homepagePresenter';
import AboutPresenter from './components/presenters/aboutPresenter';

function App(props) {


  return (
  
  <BrowserRouter>
    <div className="flexParent">
      <Routes>
        <Route path="/home" element={<HomepagePresenter model={props.model} />} />
        <Route path="/" element={<HomepagePresenter model={props.model} />} />
        <Route path="/info" element={<AboutPresenter model={props.model} />} />
      </Routes>
    </div>
  </BrowserRouter>
);
}
  
export default App;