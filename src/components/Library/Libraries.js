import "./Library.css";
import back_img from "../../images/LibBackground.png";
import contentino from "../../images/contentino.png";
import LibraryList from "./LibraryList";

function Libraries() {
  const all_libs = JSON.parse(localStorage.getItem("all_libs"))

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
    backgroundColor: "#262626",
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
          </div>

          <div style={inputFieldStyle}>
            <LibraryList libList={all_libs}/>
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
