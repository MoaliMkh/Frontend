import back_img from "../LibBackground.png";
import contentino from "../contentino.png";
import { useLocation } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import { FileUpload } from "primereact/fileupload";

import axios from "axios";
import { useState } from "react";

function Upload() {
  const [fileState, setFileState] = useState(null);


  const onClickHandler = () => {


    const data = new FormData()
    data.append('file', fileState)
    console.log(data)
    axios.post("http://localhost:8000/upload", data, { 
       // receive two    parameter endpoint url ,form data
      }).then(res => { // then print response status
        console.log(res.statusText)
      })
}


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

  const onChangeHandler = (event) => {
  
      console.log(event.target.files[0])
      setFileState(event.target.files[0])
    }

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
        {/* <FileUpload 
        uploadHandler={invoiceUploadHandler}
        name="uploader"          /> */}

      <input type="file" name="file" onChange={onChangeHandler} style={{backgroundColor: 'red', height: '10%'}}/>

      <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={onClickHandler}>بارگذاری</button> 


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
