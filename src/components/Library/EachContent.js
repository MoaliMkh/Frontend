import "./Library.css";
import back_img from "../../images/LibBackground.png";
import contentino from "../../images/contentino.png";
import AttachmentList from "../AttachmentList";
import { useNavigate } from "react-router-dom";

function EachContent() {
  const navigate = useNavigate();
  const each_content = JSON.parse(localStorage.getItem("each_content"));
  const myStyle = {
    backgroundImage: `url(${back_img})`,
    height: "100vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop: 40,
    alignItems: "center",
    overflow: "auto",
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
    marginRight: "5%",
    marginLeft: "7%",
  };

  return (
    <div style={myStyle}>
      <div style={transStyle}>
        <p
          style={{ color: "white", textAlign: "center", marginBottom: 20 }}
          class="w-full"
        >
          پیوست‌های محتوا
        </p>

        <div style={inputFieldStyle}>
          <AttachmentList libList={each_content} />
        </div>
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center w-auto text-base"
          style={{ marginLeft: "37%", marginBottom: "5%" }}
          onClick={() => {
            navigate("/uploadattachment");
          }}
        >
          <span>بارگذاری پیوست در این محتوا</span>
        </button>
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

export default EachContent;
