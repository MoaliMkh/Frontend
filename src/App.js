import "./App.css";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import HomePage from "./components/Home";
import Layout from "./components/Layout";
import SignupSuccess from "./components/User/SignupSuccess";
import AboutUs from "./components/AboutUs";
import Library from "./components/Library/Library";
import CreateLib from "./components/Library/CreateLib";
import Libraries from "./components/Library/Libraries";
import Upload from "./components/Upload";
import EditUser from "./components/User/EditUser";
import EachLibrary from "./components/Library/EachLibrary";
import UploadAttachment from "./components/UploadAttachment";
import EachContent from "./components/Library/EachContent";
import UserPanel from "./components/User/UserPanel";

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
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="library" element={<Library />} />
          <Route path="CreateLib" element={<CreateLib />} />
          <Route path="Libraries" element={<Libraries />} />
          <Route path="upload" element={<Upload />} />
          <Route path="edituser" element={<EditUser />} />
          <Route path="eachlibrary" element={<EachLibrary />} />
          <Route path="eachcontent" element={<EachContent />} />
          <Route path="userpanel" element={<UserPanel />} />

          <Route path="uploadattachment" element={<UploadAttachment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
