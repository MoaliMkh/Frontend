import './Login.css';
import back_img from '../Background.png'
import { Link } from "react-router-dom";




function Login() {

  const passwordVisibility = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
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
    // color: 'red',
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
    paddingRight: '15%', 
  };


  return (
    <div style={myStyle}>
      <div style={transStyle}>
        <p style={{color: 'white', textAlign: 'center', marginBottom: 20}}>ورود</p>
        <div class="col s12 z-depth-6 card-panel">
        <form class="login-form" style={inputFieldStyle}>


          <form class="row" >
            <div class="input-field col s12">
              {/* <i class="material-icons prefix">lock_outline</i> */}
              <input type="text" id="email" class="text-right bg-gray-50 border w-64 center-self border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="ایمیل" required></input>
            </div>
          </form>

          <form class="">
            <div class="input-field row">  
              <input type="password" id="password" class="text-right bg-gray-50 border w-64 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="رمز عبور" required></input>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 7}}>  
              <input type="checkbox" onClick={passwordVisibility}></input>
              <p class="text-sm">Show Password</p>
            </div>
          </form>


          <div class="row">

          <button type="button" class="text-white w-11/12 bg-black hover:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 focus:outline-none" >
              ورود
          </button>

            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row'}}>
                <p class="margin right-align medium-small text-sm text-center text-sky-400 mr-0.5">
                  <Link > رمز عبور خود را فراموش کرده‌اید؟</Link>
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
