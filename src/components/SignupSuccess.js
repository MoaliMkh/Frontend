// import './Login.css';
import back_img from '../Background.png'
import { Link } from "react-router-dom";
import successLogo from '../success.png'

const SignupSuccess = () => {

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
        width: '100%', 
        alignItems: 'center',
        paddingRight: '20%',
        paddingLeft: '20%',
        textAlign: 'center',
      };


    return (
        <div style={myStyle}>
        <div style={transStyle}>
          <p style={{color: 'white', textAlign: 'center', marginBottom: 20}}>فعال‌سازی حساب</p>
          {/* <div class="col s12 z-depth-6 card-panel"> */}
          <form class="login-form" style={inputFieldStyle}>
  
  
  
            <img src={successLogo} alt='success'></img>
            <p class="margin right-align medium-small text-sm text-center text-sky-400">
                حساب کاربری شما با موفقیت فعال شد
            </p>
            <Link to='/'>
            <button type="button" class="text-center text-white w-11/12 bg-black hover:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 focus:outline-none">
                بازگشت به صفحه اصلی
            </button>
            </Link>
         
  
          </form>
      {/* </div> */}
  
      </div>
      </div>
    );
}

export default SignupSuccess;