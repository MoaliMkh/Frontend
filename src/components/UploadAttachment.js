import back_img from "../LibBackground.png";
import contentino from "../contentino.png";
import { useNavigate } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { FileUpload } from "primereact/fileupload";
import req from "../api/user_req";
import { useState } from "react";
import { useAlert } from "react-alert";

function UploadAttachment() {
  const [fileState, setFileState] = useState(null);
  const alert = useAlert();
  const [name, setName] = useState("")
  const navigate = useNavigate();


  const onClickHandler = async () => {
    const data = new FormData()
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    const content_id = localStorage.getItem("content_id")
    data.append('content', fileState)
    // console.log(fileState.name.split(' ').join('_'))
    data.append('name', fileState.name.split(' ').join('_'))
    try{
      await req.post(`/${user_id}/file/${content_id}/attachment/`, data, {headers: {"Authorization": `Token ${token}`, "Content-Type": "multipart/form-data"}});
      alert.show('پیوست با موفقیت بارگذاری شد', {type: 'success'})
      navigate('/eachlibrary')
    }
    catch(e){
      alert.show('بارگذاری پیوست، با خطا مواجه شد', {type: 'error'})
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
          بارگذاری پیوست
        </p>
        <br />
        <input type="text" class="text-right bg-gray-50 border center-self border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-1000 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" style={{width: '50%', marginLeft: '27%'}}
              placeholder="نام پیوست" required onChange={(event) => {setName(event.target.value)}}></input>
        <div class="card flex justify-content-center" style={{marginLeft: '25%'}}>

        <FileUpload 
        customUpload={true}
        mode="advanced"
        auto={true}
        uploadHandler={onChangeHandler}
        name="uploader"          />
        </div>

      <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white px-4 rounded-full w-auto text-base" style={{marginLeft: '42%', marginBottom: '5%'}} onClick={onClickHandler}>بارگذاری</button> 


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

export default UploadAttachment;
