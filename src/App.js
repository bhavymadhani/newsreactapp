import React from 'react'
import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';



const App = () => {
  const pageSize = 15;  
  const [progress, setProgress] = useState(0);
 

  
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={pageSize} category="general" country="in" />} />
            <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={pageSize} category="business" country="in" />} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" country="in" />} />
            <Route exact path='/general' element={<News setProgress={setProgress} key="general" pageSize={pageSize} category="general" country="in" />} />
            <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={pageSize} category="health" country="in" />} />
            <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={pageSize} category="science" country="in" />} />
            <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} category="sports" country="in" />} />
            <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} category="technology" country="in" />} />


          </Routes>
        </BrowserRouter>
      </div>
    )
  
}


export default App