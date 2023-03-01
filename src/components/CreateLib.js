import "./CreateLib.css";
import back_img from "../LibBackground.png";
import contentino from "../contentino.png";

import { Link } from "react-router-dom";
import { useState } from "react";
import req from "../api/login_signup_req";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

function CreateLib() {
  const navigate = useNavigate();
  const alert = useAlert();

  const [passwordEquality, setPasswordEquality] = useState(true);
  const [uniqueness, setUniqueness] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const passwordEqualityChecker = () => {
    if (password === secondPassword) {
      setPasswordEquality(true);
      console.log(passwordEquality);
    } else {
      setPasswordEquality(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password };
    if (passwordEquality) {
      try {
        const res = await req.post("/register/", data);
        const { token } = res.data || {};
        const user_id = res.data.user.id;
        localStorage.setItem("user_id", user_id);
        localStorage.setItem("token", token);
        setUniqueness(true);
        alert.show("حساب کاربری شما با موفقیت ساخته شد");
        navigate("/signupsuccess");
      } catch (e) {
        setUniqueness(false);
        console.log(e);
      }
    } else {
      alert("اطلاعات خود را به درستی وارد کنید");
    }
  };

  const myStyle = {
    backgroundImage: `url(${back_img})`,
    height: "100vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop: 40,
    alignItems: "center",
  };

  const transStyle = {
    backgroundColor: "#595B60",
    opacity: 0.94,
    width: "25%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
    borderRadius: 10,
    height: 500,
  };

  const inputFieldStyle = {
    width: "90%",
    paddingLeft: "15%",
    paddingRight: "10%",
  };

  return (
    <div style={myStyle}>
      <div style={transStyle}>
        <p
          style={{ color: "white", textAlign: "center", marginBottom: 20 }}
          class="w-full"
        >
          ایجاد کتابخانه
        </p>
        <div class="col s12 z-depth-6 card-panel">
          <form class="login-form" style={inputFieldStyle}>
            <form class="row">
              <div class="input-field col s12">
                <input
                  type="text"
                  id="email"
                  class="text-right bg-gray-50 border w-full center-self border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                  placeholder="نام کتابخانه"
                  required
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                ></input>
              </div>
            </form>

            <form class="row">
              <div class="input-field col s12">
                {/* <input
                  type="password"
                  id="password1"
                  class="text-right bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                  placeholder="نوع کتابخانه"
                  value={password}
                  required
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                ></input> */}
                <label class="text-right font-bold w-full border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4">
                  نوع کتابخانه
                </label>
                <select
                  id="cars"
                  name="cars"
                  class="text-right bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                >
                  <option value="audio">صوت</option>
                  <option value="video">فیلم</option>
                  <option value="photo">عکس</option>
                  <option value="pdf">فایل متن</option>
                </select>
              </div>
            </form>

            {!passwordEquality ? (
              <p class="margin right-align medium-small text-sm text-center text-red-700 ml-0.5">
                رمزهای عبور، با هم مغایرت دارند
              </p>
            ) : null}
            {!uniqueness ? (
              <p class="margin right-align medium-small text-sm text-center text-red-700 ml-0.5">
                نام کاربری وارد شده، قبلا در سیستم ثبت شده است
              </p>
            ) : null}

            <div class="row">
              <Link to="/signupsuccess">
                <button
                  onClick={onSubmit}
                  type="button"
                  class="text-white w-full bg-black hover:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 focus:outline-none"
                >
                  ساخت کتابخانه
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, height: "10%" }}>
        <img
          src={contentino}
          alt="alt"
          style={{ marginBottom: 0, height: "100%" }}
        />
      </div>
    </div>
  );
}

export default CreateLib;
