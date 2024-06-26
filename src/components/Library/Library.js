import { Link } from "react-router-dom";
import req from "../../api/user_req";
import "./Library.css";
import back_img from "../../images/LibBackground.png";
import contentino from "../../images/contentino.png";
import { useNavigate } from "react-router-dom";
import SeeAllLibs from "../../images/SeeAllLibs.png";
import createLib from "../../images/createLib.png";

function Library() {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");

    try {
      const res = await req.get(`/${user_id}/library/`, {
        headers: { Authorization: `Token ${token}` },
      });
      localStorage.setItem("all_libs", JSON.stringify(res.data));
      navigate("/libraries");
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
    backgroundColor: "#262626",
    opacity: 0.9,
    width: "70%",
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

        <div
          class="s2 z-depth-6 card-panel"
          style={{ marginRight: "15%", marginLeft: "20%" }}
        >
          <div style={inputFieldStyle}>
            <div class=" mb-1 ml-1 items-start flex flex-row justify-between">
              <span
                class="column"
                style={{
                  width: "100%",
                  marginBottom: "1%",
                  marginRight: "20%",
                }}
              >
                <img src={createLib} alt="salam" />
                <Link to="/CreateLib">
                  <button
                    class="bg-sky-700 hover:bg-sky-500 text-white px-4 py-1 rounded-full"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    ایجاد کتابخانه جدید
                  </button>
                </Link>
              </span>

              <span class="column" style={{ width: "100%" }}>
                <img src={SeeAllLibs} alt="salam" />

                <Link to="/Libraries">
                  <button
                    class="bg-sky-700 hover:bg-sky-500 text-white px-8 py-1 rounded-full"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    onClick={onSubmit}
                  >
                    مشاهده کتابخانه‌ها
                  </button>
                </Link>
              </span>
            </div>
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

export default Library;
