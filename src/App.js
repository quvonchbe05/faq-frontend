import React, { useState } from 'react';
import MyNavbar from './Components/MyNavbar';
import Loader from './Components/Loader';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyFooter from './Components/MyFooter';
import Home from './Pages/Subjects';
import TopicsList from './Pages/TopicsList';
import TopicView from './Pages/TopicView';

const App = () => {
  const [loader, setLoader] = useState(false)
  return (
    <div id='content'>
      <MyNavbar />
      <div className='container mx-auto px-4 py-5'>
        {
          loader ? <Loader /> : null
        }
        <Routes>
          <Route path='/' element={<Home setLoader={setLoader} />} />
          <Route path='/subject/:id' element={<TopicsList setLoader={setLoader} />} />
          <Route path='/subject/topic/:id' element={<TopicView setLoader={setLoader} />} />
        </Routes>
        <ToastContainer />
      </div>
      <MyFooter />
    </div>
  );
};

export default App;