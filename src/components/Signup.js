import './Signup.css';
import back_img from '../Background.png'
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Signup() {

  const [passwordEquality, setPasswordEquality] = useState(true);

  const passwordEqualityChecker = () => {
    var password1 = document.getElementById("password1");
    var password2 = document.getElementById("password2");

    if (password1 === password2) {
      setPasswordEquality(true)
    } else {
      setPasswordEquality(false)
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
              {/* <i class="material-icons prefix">lock_outline</i> */}
              <input type="text" id="email" class="text-right bg-gray-50 border w-full center-self border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="ایمیل" required></input>
            </div>
          </form>

          <form class="row">
            <div class="input-field col s12">
              <input type="password" id="password1" class="text-right bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="رمز عبور" required></input>
            </div>
          </form>

          <form class="row">
            <div class="input-field col s12">
              <input type="password" id="password2" class=" text-right bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="تکرار رمز عبور" required></input>
            </div>
          </form>


          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 10}}>  
              <input type="checkbox" onclick="myFunction()"></input>
              <p class="text-sm">Show Password</p>
          </div>

          {!passwordEquality ? <p class="margin right-align medium-small text-sm text-center text-red-700 ml-0.5">رمزهای عبور، با هم مغایرت دارند</p>: null}


          <div class="row">

            <Link to='/signupsuccess'>
            <button onClick={passwordEqualityChecker} type="button" class="text-white w-full bg-black hover:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 focus:outline-none">
                ثبت‌نام
            </button>
            </Link>

            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>

                <p class="text-center medium-small text-sm text-sky-400" style={{flex: '100%'}}>
                  <Link to="/login">حساب کاربری دارید؟ ورود</Link>
                </p>
            </div>            
          </div>

        </form>
    </div>

    </div>
    </div>
  );
}

export default Signup;
