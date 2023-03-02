import "./upload.css";
import back_img from "../LibBackground.png";
import { useState } from "react";
import contentino from "../contentino.png";
import LibraryList from "./LibraryList";
import { useLocation } from "react-router-dom";

function Upload() {
  const [search, setSearch] = useState("");
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
