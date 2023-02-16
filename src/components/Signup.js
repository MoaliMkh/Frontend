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
    paddingRight: '15%', 

  };


  return (
    <div style={myStyle}>
      <div style={transStyle}>
        <p style={{color: 'white', textAlign: 'center'}}>ورود</p>
        <div class="col s12 z-depth-6 card-panel">
        <form class="login-form" style={inputFieldStyle}>


          <form class="row">
            <div class="input-field col s12">
              {/* <i class="material-icons prefix">lock_outline</i> */}
              <input type="text" id="email" class="text-right bg-gray-50 border w-64 center-self border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="ایمیل" required></input>
            </div>
          </form>

          <form class="row">
            <div class="input-field col s12">
              <input type="password" id="password" class="text-right bg-gray-50 border w-64 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="رمز عبور" required></input>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>  
              <input type="checkbox" onclick="myFunction()"></input>
              <p class="text-sm">Show Password</p>
            </div>
          </form>

          <form class="row">
            <div class="input-field col s12">
              <input type="password" id="password" class=" text-right bg-gray-50 border w-64 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="تکرار رمز عبور" required></input>
            </div>
          </form>


          <div class="row">

            <button type="button" class="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" style={{marginLeft: '40%', marginRight: '40%'}}>
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
