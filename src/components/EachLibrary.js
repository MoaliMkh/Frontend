import "./Library.css";
import back_img from "../LibBackground.png";
import contentino from "../contentino.png";
import LibraryList from "./LibraryList";
import { useNavigate } from "react-router-dom";

function EachLibrary() {

  const navigate = useNavigate();
  const each_lib = JSON.parse(localStorage.getItem("each_lib"))
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
        محتواهای کتابخانه    
        </p>

        <div style={inputFieldStyle}>
        <LibraryList libList={each_lib}/>
        </div>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center w-auto text-base" style={{marginLeft: '35%', marginBottom: '5%'}} onClick={() => {navigate('/upload')}}>
          <span>بارگذاری محتوا در این کتابخانه</span>
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

export default EachLibrary;
