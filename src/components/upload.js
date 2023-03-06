import back_img from "../LibBackground.png";
import contentino from "../contentino.png";
import { useNavigate } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { FileUpload } from "primereact/fileupload";
import req from "../api/user_req";
import { useState } from "react";
import { useAlert } from "react-alert";
import upload_page from '../upload_page.png';

function Upload() {
  const [fileState, setFileState] = useState(null);
  const alert = useAlert();
  const navigate = useNavigate();


  const onClickHandler = async () => {
    const data = new FormData()
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    const library_id = localStorage.getItem("library_id")
    data.append('content', fileState)
    try{
      await req.post(`/${user_id}/library/${library_id}/file/`, data, {headers: {"Authorization": `Token ${token}`, "Content-Type": "multipart/form-data"}});
      alert.show('فایل با موفقیت بارگذاری شد', {type: 'success'})
      navigate('/Libraries')
    }
    catch(e){
      alert.show('بارگذاری فایل، با خطا مواجه شد', {type: 'error'})
    }
}
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

  const onChangeHandler = ({files}) => {
      const [file] = files;
      setFileState(file);
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

        <div class="card flex justify-content-center" style={{marginLeft: '25%'}}>
        <FileUpload 
        customUpload={true}
        mode="advanced"
        auto={true}
        uploadHandler={onChangeHandler}
        name="uploader"          />
        </div>

      <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white px-4 text-3xl rounded-lg w-auto" style={{marginLeft: '42%', marginBottom: '5%'}} onClick={onClickHandler}>بارگذاری</button> 
      <img src={upload_page} alt="salam" style={{marginLeft: 0, marginBottom: 0, height: '30%'}}/>


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
