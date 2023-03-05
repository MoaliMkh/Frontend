// import back_img from '../userprofilebg.png'

import back_img from '../profile_page.png'

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

  const textarea1= {
    // marginLeft: '30%',
    // marginBottom: '0.5%',
    position: 'absolute',
    left: '30%',
    bottom: '48%',
    fontSize: '30px',
                };   
                
  const textarea2= {
    // marginLeft: '30%',
    // marginBottom: '100%',
    left: '30%',
    bottom: '39%',
    fontSize: '30px',
    position: 'absolute'
                };        

  return (
    <div style={myStyle}>
    <div >
    
      <p style={{color: 'white', textAlign: 'center', marginTop:20, fontSize:'45px'}} class="title">مشخصات کاربر</p>
      
      <p dir="rtl">
      <p style={{color: 'white', textAlign: 'center', marginLeft: '30%', marginTop:220}} class="username">نام کاربری:</p>
      <p style={{color: 'white', textAlign: 'center', marginLeft: '30%', marginTop:20}} class="phonenumber">شماره تلفن: </p>
      </p>
      <div style={textarea1}>
        <textarea readonly rows="1" cols="20" id="receivedusername" name="receivedusername" value={username}></textarea>
      </div>

      <div style={textarea2}>
        <textarea readonly rows="1" cols="20" id="receivedphonenumber" name="receivedphonenumber" value={phone_number}></textarea>
      </div>

    </div>

    <div style={{position: 'absolute', bottom: 0, height: '10%'}}>
    <img src={contentino} alt="alt" style={{ marginBottom: 0, height: '100%'}}/>
  </div>

  </div>

  );
}

export default UserPanel;



{/* <div style={myStyle}>
<div >

  <p style={{color: 'white', textAlign: 'center', marginTop:20, fontSize:'45px'}} class="title">مشخصات کاربر</p>
  
  <p dir="rtl">
  <p style={{color: 'white', textAlign: 'center', marginLeft: '30%', marginTop:220}} class="username">نام کاربری:</p>
  <p style={{color: 'white', textAlign: 'center', marginLeft: '30%', marginTop:20}} class="phonenumber">شماره تلفن: </p>
  </p>
  <div style={textarea1}>
    <textarea readonly rows="1" cols="10" id="receivedusername" name="receivedusername" value={username}></textarea>
  </div>

  <div style={textarea2}>
    <textarea readonly rows="1" cols="10" id="receivedphonenumber" name="receivedphonenumber" value={phone_number}></textarea>
  </div>

</div>

<div style={{position: 'absolute', bottom: 0, height: '10%'}}>
<img src={contentino} alt="alt" style={{ marginBottom: 0, height: '100%'}}/>
</div>

</div> */}