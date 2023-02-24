import { Outlet, Link } from "react-router-dom";
import vector1 from "../Vector.png";
import vector2 from "../Vector2.png";
import vector3 from "../Vector3.png";
import vector4 from "../Vector4.png";
import vector5 from "../Vector5.png";
import vector6 from "../Vector6.png";
import login_img from "../login_logo.png";

const Layout = () => {
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
        class="fixed top-0 right-0 z-40 w-16 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src={vector4} alt="vec1"></img>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src={vector5} alt="vec1"></img>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src={vector1} alt="vec1"></img>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src={vector6} alt="vec1"></img>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src={vector3} alt="vec1"></img>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img src={vector2} alt="vec1"></img>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <Outlet />
    </>
  );
};

export default Layout;
