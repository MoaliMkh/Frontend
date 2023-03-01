import "./Library.css";
import back_img from "../LibBackground.png";
import { useState } from "react";
import contentino from "../contentino.png";
import LibraryList from "./LibraryList";
import { useLocation } from "react-router-dom";

function Libraries() {
  const [search, setSearch] = useState("");
  const {state} = useLocation();
  console.log(state)
  const myStyle = {
    backgroundImage: `url(${back_img})`,
    height: "100vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop: 40,
    alignItems: "center",
    overflow: "auto"
  };

  const transStyle = {
    backgroundColor: "#595B60",
    opacity: 0.94,
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
    borderRadius: 10,
    height: "88%",
    overflow: "auto",

  };

  const inputFieldStyle = {
    width: "90%",
    // paddingLeft: "13%",
    // paddingRight: "10%",
    marginRight: '5%',
    marginLeft: '7%'
  };

  return (
    <div style={myStyle}>
      <div style={transStyle}>
        <p
          style={{ color: "white", textAlign: "center", marginBottom: 20 }}
          class="w-full"
        >
          کتابخانه‌ها
        </p>

        <div class="col s2 z-depth-6 card-panel">
          <div class="flex mb-6 ml-10 md:grid-cols-3">
                <span class="column">
                  <button
                    class=" hover:bg-emerald-400 text-white px-8 py-1 rounded-full"
                    style={{
                      width: 200,
                      backgroundColor: "#A7DEA6",
                    }}
                  >
                    اعمال
                  </button>
                </span>

                <span class="column">
                  <button
                    class="bg-emerald-300 hover:bg-emerald-400 text-white px-8 py-1 rounded-full"
                    style={{
                      width: 200,
                      backgroundColor: "#D9D9D9",
                    }}
                  >
                    فیلتر
                  </button>
                </span>

                <span class="column">
                  <form>
                    <input
                      type="text"
                      id="search"
                      class="text-right bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
                      placeholder="جستجو"
                      value={search}
                      required
                      onChange={(event) => {
                        setSearch(event.target.value);
                      }}
                      style={{
                        width: 350,
                        backgroundColor: "#D9D9D9",
                      }}
                    ></input>
                  </form>
                </span>
          </div>

          <div style={inputFieldStyle}>
            <LibraryList libList={state}/>
          </div>

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

export default Libraries;
