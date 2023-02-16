import './Signup.css';
import back_img from '../Background.png'

function Signup() {
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
    // eslint-disable-next-line no-restricted-globals
    // backdropFilter: blur('8px'),
    height: 500
  };


  return (
    <div style={myStyle}>
      <div style={transStyle}>
        <p style={{color: 'white', textAlign: 'center'}}>ورود</p>
        <div class="col s12 z-depth-6 card-panel">
        <form class="login-form">


          <form class="row">
            <div class="input-field col s12">
              {/* <i class="material-icons prefix">lock_outline</i> */}
              <input type="text" id="email" class="text-right bg-gray-50 border w-64 center-self border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="ایمیل" required></input>
            </div>
          </form>

          <form class="row">
            <div class="input-field col s12">
              {/* <i class="material-icons prefix">lock_outline</i> */}
              <input type="password" id="password" class="text-right bg-gray-50 border w-64 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="رمز عبور" required></input>
            </div>
          </form>

          <form class="row">
            <div class="input-field col s12">
              {/* <i class="material-icons prefix">lock_outline</i> */}
              <input type="password" id="password" class=" text-right bg-gray-50 border w-64 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="تکرار رمز عبور" required></input>
            </div>
          </form>


          <div class="row">

          <button type="button" class="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mx-40 px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              ثبت‌نام
          </button>

            <div class="input-field col s6 m6 l6">
                <p class="margin right-align medium-small text-lg text-center text-sky-400"><a href="#">رمز عبور خود را فراموش کرده‌اید؟ | ثبت‌نام</a></p>
            </div>          
          </div>

        </form>
    </div>

    </div>
    </div>
  );
}

export default Signup;
