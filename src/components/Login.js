import './Login.css';
import back_img from '../Background.png'
import { Link } from "react-router-dom";
import { useState } from 'react';
import req from '../api/req';
import { useNavigate } from 'react-router-dom';



function Login() {
  const navigate = useNavigate();


  const [authorized, setAuthorized] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const passwordVisibility = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const onSubmit = async (e) => {
    
    e.preventDefault()
    const data = { username, password }
    try {
      const res = await req.post('/login/', data)
      const {token} = res.data || {};
      localStorage.setItem("token", token);
      console.log(token);
      setAuthorized(true)
      navigate('/signupsuccess')
    } catch (e) {
      setAuthorized(false)
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
            alignItems: 'center',
            
            };
  
  const transStyle = {
    backgroundColor:"#595B60",
    opacity: 0.94,
    width: '25%', 
    marginLeft: 'auto',  
    marginRight: 'auto',  
    borderRadius: 10,
    height: 500,
    marginTop: '5%'
  };

  const inputFieldStyle = {
    width: '90%', 
    paddingLeft: '15%',  
    paddingRight: '10%', 
  };


  return (
    <div style={myStyle}>
      <div style={transStyle}>
        <p style={{color: 'white', textAlign: 'center', marginBottom: 20}} class="w-full">ورود</p>
        <div class="col s12 z-depth-6 card-panel">
        <form class="login-form" style={inputFieldStyle}>


          <form class="row" >
            <div class="input-field col s12">
              <input type="text" id="email" class="text-right bg-gray-50 border w-full center-self border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" 
              placeholder="ایمیل" required value={username} onChange={(event) => {setUsername(event.target.value)}}></input>
            </div>
          </form>

          <form class="">
            <div class="input-field row">  
              <input type="password" id="password" class="text-right bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="رمز عبور" required value={password} onChange={(event) => {setPassword(event.target.value)}}></input>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 7, justifyContent: 'right'}}>  
              <p class="text-sm" style={{marginRight: 5}}>نمایش رمز عبور</p>
              <input type="checkbox" onClick={passwordVisibility}></input>
            </div>
          </form>

          {authorized ? null: <p class="margin right-align medium-small text-sm text-center text-red-700 ml-0.5">ایمیل یا رمز عبور، نامعتبر است</p>}


          <div class="row">

          <button type="button" class="text-center text-white w-full bg-black hover:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 focus:outline-none" 
          onClick={onSubmit}>
              ورود
          </button>




          {/* {authorized ? <Link to="/"></Link> : null} */}

            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
                <p class="margin right-align medium-small text-sm text-center text-sky-400 mr-0.5">
                  <Link to="/signup"> حساب کاربری ندارید؟</Link>
                </p>

                <p class="margin right-align medium-small text-sm text-center text-white">
                  |
                </p>

                <p class="margin right-align medium-small text-sm text-center text-sky-400 ml-0.5">
                  <Link to="/signup">ثبت‌نام</Link>
                </p>
            </div>          
          </div>

        </form>
    </div>
    </div>
    </div>
  );
}

export default Login;
