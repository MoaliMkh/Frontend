import './Signup.css';
import back_img from '../Background.png'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import req from '../api/req';

function Signup() {

  const [passwordEquality, setPasswordEquality] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");



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

  
  const passwordEqualityChecker = () => {
    // var password1 = document.getElementById("password1");
    // var password2 = document.getElementById("password2");
    if (password === secondPassword) {
      setPasswordEquality(true)
      console.log(passwordEquality)
      
    } else {
      setPasswordEquality(false)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = { username, password }
    const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
    if (passwordEquality){
      try {
        const res = await req.post('/register/', data, {headers}, { crossdomain: true })
        console.log(res.data)
      } catch (e) {
        alert(e)
        console.log(e)
      }
    }
    else{
      alert("Correct Your Information!")
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
    width: '25%', 
    marginLeft: 'auto',  
    marginRight: 'auto',
    marginTop: '5%',  
    borderRadius: 10,
    height: 500
  };

  const inputFieldStyle = {
    width: '90%', 
    paddingLeft: '15%',  
    paddingRight: '10%', 

  };


  return (
    <div style={myStyle}>
      <div style={transStyle}>
        <p style={{color: 'white', textAlign: 'center', marginBottom: 20}} class="w-full">ثبت‌نام</p>
        <div class="col s12 z-depth-6 card-panel">
        <form class="login-form" style={inputFieldStyle}>


          <form class="row">
            <div class="input-field col s12">
              <input type="text" id="email" class="text-right bg-gray-50 border w-full center-self border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" 
              placeholder="ایمیل" required onChange={(event) => {setUsername(event.target.value)}}></input>
            </div>
          </form>

          <form class="row">
            <div class="input-field col s12">
              <input type="password" id="password1" class="text-right bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" 
              placeholder="رمز عبور" value={password} required onChange={(event) => {setPassword(event.target.value)}}></input>
            </div>
          </form>

          <form class="row">
            <div class="input-field col s12">
              <input type="password" id="password2" class=" text-right bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="تکرار رمز عبور" value={secondPassword} required onChange={(event) => {setSecondPassword(event.target.value)}} onBlur={passwordEqualityChecker}></input>
            </div>
          </form>


          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 7, justifyContent: 'right'}}>  
              <p class="text-sm" style={{marginRight: 5}}>نمایش رمز عبور</p>
              <input type="checkbox" onClick={() => {passwordVisibility()}}></input>
          </div>

          {!passwordEquality ? <p class="margin right-align medium-small text-sm text-center text-red-700 ml-0.5">رمزهای عبور، با هم مغایرت دارند</p> : null}


          <div class="row">

            <Link to='/signupsuccess'>
            <button onClick={onSubmit} type="button" class="text-white w-full bg-black hover:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 focus:outline-none">
                ثبت‌نام
            </button>
            </Link>

            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>

                <p class="text-center medium-small text-sm text-sky-400" style={{flex: '100%'}}>
                  <Link to="/login">حساب کاربری دارید؟ ورود</Link>
                </p>
            </div>            
          </div>

          <div style={{width: '100%', height: 1, backgroundColor: '#2F3233', marginTop: 5}}>

          </div>
        </form>
    </div>

    </div>
    </div>
  );
}

export default Signup;
