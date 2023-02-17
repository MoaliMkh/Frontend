import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import SignupSuccess from './components/SignupSuccess'

import { BrowserRouter, Routes, Route } from "react-router-dom";






function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="signupsuccess" element={<SignupSuccess />} />


        

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
