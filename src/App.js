import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HomePage from "./components/Home";
import Layout from "./components/Layout";
import SignupSuccess from "./components/SignupSuccess";
import AboutUs from "./components/AboutUs";
import Library from "./components/Library";
import CreateLib from "./components/CreateLib";
import Libraries from "./components/Libraries";
import Upload from "./components/Upload";
import EditUser from './components/EditUser'

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions } from 'primereact/api';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="signupsuccess" element={<SignupSuccess />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="library" element={<Library />} />
          <Route path="CreateLib" element={<CreateLib />} />
          <Route path="Libraries" element={<Libraries />} />
          <Route path="upload" element={<Upload />} />
          <Route path="edituser" element={<EditUser />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
