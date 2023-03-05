import { Outlet, Link, useNavigate } from "react-router-dom";
import userIcon from "../user_icon.png";
import settingIcon from "../setting_icon.png";
import logoutIcon from "../logout_icon.png";
import contentIcon from "../content_icon.png";
import req from '../api/login_signup_req'
import home from '../home.png'
import { useAlert } from "react-alert";

const Layout = () => {
  const alert = useAlert()
  const navigate = useNavigate()
  const signout = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token");
    console.log(token)
    try {
      const res = await req.get('/logout/', {headers: {"Authorization": `Token ${token}`}})
      console.log(res.data);
      localStorage.removeItem("token")
      localStorage.removeItem("user_id")
      alert.show('با موفقیت از حساب خود خارج شدید')
      navigate('/login')
    } catch (e) {
      console.log(e)
    }

  }
  return (
    <>
      <aside
        id="default-sidebar"
        class="fixed top-0 right-0 z-40 w-16 h-screen transition-transform sm:translate-x-0"

        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2">

            <li style={{marginBottom: '70%', marginTop: '100%'}}>
              <Link
                to="/"
                class="flex-row items-center text-sm font-normal text-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src={home} alt="vec1" style={{width: '60%', height: '10%', marginLeft: '18%'}}></img>
                <p>خانه</p>

              </Link>
            </li>

            <li style={{marginBottom: '70%'}}>
              <Link
                href="#"
                class="flex-row items-center text-sm font-normal text-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src={userIcon} alt="vec1" style={{width: '60%', height: '10%', marginLeft: '18%'}}></img>
                <p>نام کاربری</p>

              </Link>
            </li>

            <li style={{marginBottom: '70%'}}>
              <Link
                to='/libraries'
                class="flex-row items-center text-sm font-normal text-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src={contentIcon} alt="vec1" style={{width: '60%', height: '10%', marginLeft: '18%'}}></img>
                <p>محتواها</p>
              </Link>
            </li>

            <li style={{marginBottom: '70%'}}>
              <Link
                to="/edituser"
                class="flex-row items-center text-sm font-normal text-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src={settingIcon} alt="vec1" style={{width: '60%', height: '10%', marginLeft: '18%'}}></img>
                <p>ویرایش حساب</p>

              </Link>
            </li>

            <li style={{marginBottom: '70%'}}>

              <div class="flex-row items-center text-sm font-normal text-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={signout}>
                <img src={logoutIcon} alt="vec1" style={{width: '60%', height: '10%', marginLeft: '18%'}}></img>
                <p>خروج</p>
              </div>

            </li>

          </ul>
        </div>
      </aside>

      <Outlet />
    </>
  );
};

export default Layout;
