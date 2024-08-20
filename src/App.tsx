import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import Home from './pages/home/home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import SelectWorker from './pages/selectTag/selectTagWorker';
import SelectStudent from './pages/selectTag/selectTagStudent';
import Profile from './pages/profile/Profile';
import WrongPage from './pages/wrongpage/WrongPage';
import SwapRecomendation from './pages/swaprecomendation/SwapRecomendation';
import Search from './pages/search/Search';
import Details from './pages/details/details';
import SwapForm from './components/form/SwapForm';
import Progresswap from './pages/progresswap/Progresswap';

function App() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/login" element={<Login setEmail={setEmail} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/selectworker" element={<SelectWorker />} />
        <Route path="/selectstudent" element={<SelectStudent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wrong" element={<WrongPage />} />
        <Route path="/swaprecomen" element={<SwapRecomendation />} />
        <Route path="/search/bahasa inggris" element={<Search />} />
        <Route path="/search/ipa" element={<Search />} />
        <Route path="/search/ips" element={<Search />} />
        <Route path="/search/matematika" element={<Search />} />
        <Route path="/details/bahasainggris" element={<Details />} />
        <Route path="/swapform" element={<SwapForm />} />
        <Route path="/progresswap" element={<Progresswap />} />
      </Routes>
    </>
  );
}

export default App;
