import "./CreateLib.css";
import back_img from "../../images/LibBackground.png";
import contentino from "../../images/contentino.png";
import { useState } from "react";
import req from "../../api/user_req";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

function CreateLib() {
  const navigate = useNavigate();
  const alert = useAlert();
  const [libName, setLibName] = useState("");
  const [libType, setLibType] = useState("Audio");

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");
    const data = {
      name: `${libName}`,
      content_type: `${libType}`,
      user: `${user_id}`,
    };

    try {
      const res = await req.post(`/${user_id}/library/`, data, {
        headers: { Authorization: `Token ${token}` },
      });
      console.log(res.data);
      alert.show("کتابخانه با موفقیت ساخته شد", { type: "success" });
      navigate("/library");
    } catch (e) {
      console.log(e);
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
                  value={libName}
                  onChange={(event) => {
                    setLibName(event.target.value);
                  }}
                ></input>
              </div>
            </form>

            <form class="row">
              <div class="input-field col s12">
                <label class="text-right font-bold w-full border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4">
                  نوع کتابخانه
                </label>
                <select
                  id="cars"
                  name="cars"
                  class="text-right bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                  value={libType}
                  defaultValue="Audio"
                  onChange={(e) => setLibType(e.target.value)}
                >
                  <option value="Audio">صوت</option>
                  <option value="Video">فیلم</option>
                  <option value="Book">کتاب</option>
                </select>
              </div>
            </form>

            <div class="row">
              <button
                onClick={onSubmit}
                type="button"
                class="text-white w-full bg-black hover:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 focus:outline-none"
              >
                ساخت کتابخانه
              </button>
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
