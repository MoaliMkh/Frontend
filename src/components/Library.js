import { Link } from "react-router-dom";

import "./Library.css";
import back_img from "../LibBackground.png";
import contentino from "../contentino.png";

function Library() {
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
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
    borderRadius: 10,
    height: "88%",
  };

  const inputFieldStyle = {
    width: "90%",
    paddingLeft: "10%",
    paddingRight: "10%",
  };

  return (
    <div style={myStyle}>
      <div style={transStyle}>
        <br />
        <p
          style={{ color: "white", textAlign: "center", marginBottom: 20 }}
          class="w-full"
        >
          کتابخانه
        </p>

        <br />

        <div class="s2 z-depth-6 card-panel">
          <div style={inputFieldStyle}>
            <div class="grid gap-6 mb-1 ml-1 md:grid-cols-1 justify-center">
              <span class="column">
                <Link to="/CreateLib">
                  <button
                    class="bg-violet-300 hover:bg-violet-400 text-white px-8 py-1 rounded-full"
                    style={{
                      width: 800,
                      height: 60,
                    }}
                  >
                    ایجاد کتابخانه جدید
                  </button>
                </Link>
              </span>

              <span class="column">
                <Link to="/Libraries">
                  <button
                    class="bg-violet-300 hover:bg-violet-400 text-white px-8 py-1 rounded-full"
                    style={{
                      width: 800,
                      height: 60,
                    }}
                  >
                    مشاهده مجموعه کتابخانه ها
                  </button>
                </Link>
              </span>
            </div>
          </div>

          <button type="button" class="text-center text-white w-full bg-black hover:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 focus:outline-none" 
          onClick={createLibrary}>
             ساخت کتابخانه جدید 
          </button>

          <button type="button" class="text-center text-white w-full bg-black hover:ring-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 focus:outline-none" 
          onClick={seeLibrary}>
            مشاهده تمام کتابخانه‌ها
          </button>
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

export default Library;
