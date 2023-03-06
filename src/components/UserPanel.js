// import back_img from '../userprofilebg.png'

import back_img from '../profile_page_back.png'
import profile_icon from '../profile_icon.png'
import { Link } from 'react-router-dom';
import contentino from '../contentino.png'

function UserPanel() {
  const myStyle= {
    backgroundImage:`url(${back_img})`,
            height:'100vh',
            fontSize:'35px',
            backgroundSize: 'cover',
            paddingTop: 50
                };
  
  const username = localStorage.getItem('username');
  const phone_number = localStorage.getItem('phone_number');
                
  const transStyle = {
    backgroundColor: "#262626",
    opacity: 0.9,
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
    borderRadius: 10,
    height: "84%",
    display: 'flex',
    flexDirection: 'column'
    };

  return (
    <div style={myStyle}>
    <div style={transStyle}>
    
      {/* <p style={{color: 'white', textAlign: 'center', marginTop:20, fontSize:'45px'}} class="title">مشخصات کاربر</p>
      
      <p dir="rtl">
      <p style={{color: 'white', textAlign: 'center', marginLeft: '30%', marginTop:220}} class="username">نام کاربری:</p>
      <p style={{color: 'white', textAlign: 'center', marginLeft: '30%', marginTop:20}} class="phonenumber">شماره تلفن: </p>
      </p> */}
      <img src={profile_icon} alt="salam" style={{height: '40%', width: '40%', marginTop: '-20%', marginLeft:'30%'}} />
      <div style={{flexDirection: 'row', display: 'flex', direction: 'rtl'}}>
        <label class="text-white text-3lg" style={{marginRight: '10%'}}>نام کاربری</label>

        <textarea readonly rows="1" cols="18" value={username} style={{marginRight: '33%'}}
        class="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </textarea>



      </div>

      <div style={{flexDirection: 'row', display: 'flex', direction: 'rtl', marginTop: '10%'}}>
        <label class="text-white text-3lg w-fit" style={{marginRight: '10%'}}>شماره تلفن</label>

        <textarea readonly rows="1" cols="18" value={phone_number} style={{ marginRight: '30%'}}
        class="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>

      </div>


      <div style={{flexDirection: 'row', display: 'flex', direction: 'rtl', marginTop: '10%'}}>
        <label class="text-white text-3lg w-fit text-sm" style={{marginRight: '8%', marginTop: '4%', marginLeft: '1%'}}>مایل به ویرایش حساب خود هستید؟</label>
        <Link to="/edituser">
        <button type="button" class="text-center text-white w-fit bg-sky-700 hover:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 focus:outline-none" style={{marginBottom: '50%'}} >
          ویرایش حساب
        </button>
        </Link>

      </div>
      <></>
    </div>

    <div style={{position: 'absolute', bottom: 0, height: '10%'}}>
      <img src={contentino} alt="alt" style={{ marginBottom: 0, height: '100%'}}/>
    </div>

  </div>

  );
}

export default UserPanel;