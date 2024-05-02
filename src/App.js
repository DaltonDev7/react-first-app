
import './App.css';
import { SignUp } from './components/signUp';
import { SignIn } from './components/signIn';
import { Home } from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from './config/firebase-config'
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import { moviesCollectionName } from './core/constants/collections.constans'




function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/signIn" element={ <SignIn/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
