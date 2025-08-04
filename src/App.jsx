import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Main from './Components/pages/Main';
import About from './Components/pages/About';
import Layout from './Components/pages/Layout';
import Footer from './Components/pages/Footer';
import Divisions from './Components/pages/Divisions';
import Rsu from './Components/pages/divisions/Rsu';
import Reu1 from './Components/pages/divisions/Reu1';
import Reu2 from './Components/pages/divisions/Reu2';
import Reu8 from './Components/pages/divisions/Reu8';
import Reu12 from './Components/pages/divisions/Reu12';
import Reu15 from './Components/pages/divisions/Reu15';
import Ads from './Components/pages/divisions/Ads';
import Administration from './Components/pages/divisions/Administration';
import Services from './Components/pages/Services';
import Vacancies from './Components/pages/Vacancies';
import Disclosure from './Components/pages/Disclosure';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/divisions' element={<Divisions />}/>
            <Route path='divisions/rsu' element={<Rsu />}/>
            <Route path='divisions/reu-1' element={<Reu1 />}/>
            <Route path='divisions/reu-2' element={<Reu2 />}/>
            <Route path='divisions/reu-8' element={<Reu8 />}/>
            <Route path='divisions/reu-12' element={<Reu12 />}/>
            <Route path='divisions/reu-15' element={<Reu15 />}/>
            <Route path='divisions/ads' element={<Ads />}/>
            <Route path='divisions/admin' element={<Administration />}/>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/vacancies' element={<Vacancies />}></Route>
            <Route path='/disclosure' element={<Disclosure />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
