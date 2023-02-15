import './Login.css';
import back_img from '../Background.png'

function Login() {
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
    backgroundColor:"#CBCBCB",
    opacity: .9,
    width: '25%', 
    marginLeft: 'auto',  
    marginRight: 'auto',  
    borderRadius: 10,
    // eslint-disable-next-line no-restricted-globals
    // backdropFilter: blur('8px'),
    zIndex: 20,
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
              <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="ایمیل" required></input>
            </div>
          </form>

          <form class="row">
            <div class="input-field col s12">
              {/* <i class="material-icons prefix">lock_outline</i> */}
              <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="رمز عبور" required></input>
            </div>
          </form>


          <div class="row">

          <button type="button" class="text-white bg-blue-700 items-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              ورود
          </button>

            <div class="input-field col s6 m6 l6">
                <p class="margin right-align medium-small text-lg text-sky-400"><a href="#">رمز عبور خود را فراموش کرده‌اید؟ | ثبت‌نام</a></p>
            </div>          
          </div>

        </form>
    </div>

    </div>
    </div>
  );
}

export default Login;
