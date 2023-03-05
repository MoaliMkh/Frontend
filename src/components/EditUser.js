import './Signup.css';
import back_img from '../Background.png'
import contentino from '../contentino.png'


import {Link} from 'react-router-dom';
import { useState } from 'react';
import req from '../api/login_signup_req';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';

function EditUser() {
  const navigate = useNavigate();
  const alert = useAlert()


  const [otherPartsVisibility, setOtherPartsVisibility] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [newPassword, setNewPassword] = useState("");



  const passwordVisibility = () => {
    var x = document.getElementById("password1");
    var y = document.getElementById("password2");

    if (x.type === "password" && y.type === "password") {
      x.type = "text";
      y.type = "text";

    } else {
      x.type = "password";
      y.type = "password";
    }
  }

  const checkPasswordAuth = () => {
    const realPassword = localStorage.getItem("password");
    if (password === realPassword){ 
      setOtherPartsVisibility(true)
    }
    else{
      setOtherPartsVisibility(false)
      alert.show('رمز عبور نادرست است', {type: 'error'})
    }
  }


  const onSubmit = async (e) => {
    e.preventDefault()
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    const data = { "username": username, "new_password": newPassword, "phone_number": phoneNum, "password": password }
    try {
      await req.patch(`/profile/${user_id}/`, data, {headers: {"Authorization": `Token ${token}`}} )
      alert.show('تغییرات با موفقیت اعمال شد', {type: 'success'})
      navigate('/')
    } catch (e) {
      console.log(e)
    }
    
  }

  const myStyle={
    backgroundImage:`url(${back_img})`,
            height:'100vh',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingTop: 40,
            alignItems: 'center'
            };
  
  const transStyle = {
    backgroundColor:"#595B60",
    opacity: 0.94,
    width: '60%', 
    height: '80%',
    marginLeft: 'auto',  
    marginRight: 'auto',
    marginTop: '5%',  
    borderRadius: 10
  };

  const inputFieldStyle = {
    width: '90%', 
    paddingLeft: '15%',  
    paddingRight: '10%', 

  };

  return (
    <div style={myStyle}>
      <div style={transStyle}>
        <p style={{color: 'white', textAlign: 'center', marginBottom: 20}} class="w-full">برای تغییرات، ابتدا رمز عبور را وارد کنید</p>
        <div class="col s12 z-depth-6 card-panel">
        <form class="login-form" style={inputFieldStyle}>


          <form class="row">
            <div class="input-field col s12">
              <input type="password" id="password1" class="text-right bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" 
              placeholder="رمز عبور" value={password} required onChange={(event) => {setPassword(event.target.value)}}></input>
            </div>

            {!otherPartsVisibility ? 
            <button onClick={checkPasswordAuth} type="button" class="text-white w-full bg-black hover:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 focus:outline-none">
            تایید رمز عبور
        </button>
            : null}

          </form>

          {otherPartsVisibility ? 
          <div>

                  <form class="row">
                     <div class="input-field col s12">
                       <input type="email" class=" text-right bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       placeholder="ایمیل" value={username} required onChange={(event) => {setUsername(event.target.value)}}></input>
                     </div>
                   </form>


                  <form class="row">
                     <div class="input-field col s12">
                       <input type="phone" class=" text-right bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       placeholder="شماره تلفن همراه" value={phoneNum} required onChange={(event) => {setPhoneNum(event.target.value)}}></input>
                     </div>
                   </form>

                   <form class="row">
                     <div class="input-field col s12">
                       <input type="password" id="password2" class=" text-right bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       placeholder="رمز عبور جدید" value={newPassword} required onChange={(event) => {setNewPassword(event.target.value)}}></input>
                     </div>
                   </form>
         
         
                   <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 7, justifyContent: 'right'}}>  
                       <p class="text-sm" style={{marginRight: 5}}>نمایش رمز عبور</p>
                       <input type="checkbox" onClick={() => {passwordVisibility()}}></input>
                   </div>
                  
         
                   <div class="row">
         
                     <Link to='/signupsuccess'>
                     <button onClick={onSubmit} type="button" class="text-white w-full bg-black hover:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 focus:outline-none">
                      ثبت تغییرات
                     </button>
                     </Link>
                  
                   </div>
         
                   <div style={{width: '100%', height: 1, backgroundColor: '#2F3233', marginTop: 5}}>
         
                   </div>
          </div>
          : null}
          


          
        </form>
    </div>

    </div>

    <div style={{position: 'absolute', bottom: 0, height: '10%'}}>
      <img src={contentino} alt="alt" style={{ marginBottom: 0, height: '100%'}}/>
    </div>
    </div>
  );
}

export default EditUser;
