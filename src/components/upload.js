import "./upload.css";
import back_img from "../LibBackground.png";
import contentino from "../contentino.png";
import { useLocation } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { FileUpload } from "primereact/fileupload";

function Upload() {
  const { state } = useLocation();
  console.log(state);
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

  return (
    <div style={myStyle}>
      <div style={transStyle}>
        <p
          style={{ color: "white", textAlign: "center", marginBottom: 20 }}
          class="w-full"
        >
          بارگذاری فایل
        </p>
        <br />
        <FileUpload name="uploader" url="./upload" />
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

export default Upload;
