import { Outlet, Link, useNavigate } from "react-router-dom";
import userIcon from "../user_icon.png";
import settingIcon from "../setting_icon.png";
import logoutIcon from "../logout_icon.png";
import contentIcon from "../content_icon.png";
import login_img from "../login_logo.png";
import req from '../api/login_signup_req'
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
      alert.show('با موفقیت از حساب خود خارج شدید')
      navigate('/')
    } catch (e) {
      console.log(e)
    }

  }
  return (
    <>
      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>

          <div class="flex md:order-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Link
              to="/login"
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
              }}
            >
              <button type="button" class="">
                ورود | ثبت‌نام
              </button>
              <img
                src={login_img}
                alt="logo_img"
                style={{ height: 20, marginLeft: 5 }}
              ></img>
            </Link>
          </div>

          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4 border text-white border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/signup">تماس با ما</Link>
              </li>
              <li>
                <Link to="/signup">فیچرها</Link>
              </li>
              <li>
                <Link to="/aboutus">درباره ما</Link>
              </li>
              <li>
                <Link to="/library">کتابخانه</Link>
              </li>
              <li>
                <Link to="/">خانه</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <aside
        id="default-sidebar"
        // class="fixed top-0 right-0 z-40 w-16 h-screen transition-transform -translate-x-full sm:translate-x-0"
        class="fixed top-0 right-0 z-40 w-16 h-screen transition-transform sm:translate-x-0"

        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2">

            <li style={{marginBottom: '70%', marginTop: '100%'}}>
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
                href="#"
                class="flex-row items-center text-sm font-normal text-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src={contentIcon} alt="vec1" style={{width: '60%', height: '10%', marginLeft: '18%'}}></img>
                <p>محتواها</p>
              </Link>
            </li>

            <li style={{marginBottom: '70%'}}>
              <Link
                href="#"
                class="flex-row items-center text-sm font-normal text-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src={settingIcon} alt="vec1" style={{width: '60%', height: '10%', marginLeft: '18%'}}></img>
                <p>ویرایش حساب</p>

              </Link>
            </li>

            <li style={{marginBottom: '70%'}}>
              {/* <Link
                href="#"
                class="flex-row items-center text-sm font-normal text-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              > */}
              <div class="flex-row items-center text-sm font-normal text-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={signout}>
                <img src={logoutIcon} alt="vec1" style={{width: '60%', height: '10%', marginLeft: '18%'}}></img>
                <p>خروج</p>
              </div>

              {/* </Link> */}
            </li>

          </ul>
        </div>
      </aside>

      <Outlet />
    </>
  );
};

export default Layout;
