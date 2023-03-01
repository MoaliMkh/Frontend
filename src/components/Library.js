import { Link } from "react-router-dom";
import req from '../api/user_req'
import "./Library.css";
import back_img from "../LibBackground.png";
import contentino from "../contentino.png";
import { useNavigate } from "react-router-dom";


function Library() {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");

    try {
      const res = await req.get(`/${user_id}/library/`, {headers: {"Authorization": `Token ${token}`}})
      console.log(res.data);
      navigate('/libraries', {state: res.data})
    } catch (e) {
      console.log(e)
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
    backgroundColor: "#595B60",
    opacity: 0.94,
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
    borderRadius: 10,
    height: "88%"
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

        <div class="s2 z-depth-6 card-panel" style={{marginRight: '15%', marginLeft: '20%'}}>
          <div style={inputFieldStyle}>
            <div class="grid gap-6 mb-1 ml-1 md:grid-cols-1 justify-center items-start">
              <span class="column" style={{width: '100%'}}>
                <Link to="/CreateLib">
                  <button
                    class="bg-violet-300 hover:bg-violet-400 text-white px-4 py-1 rounded-full"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    ایجاد کتابخانه جدید
                  </button>
                </Link>
              </span>

              <span class="column" style={{width: '100%'}}>
                <Link to="/Libraries">
                  <button
                    class="bg-violet-300 hover:bg-violet-400 text-white px-8 py-1 rounded-full"
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    onClick={onSubmit}
                  >
                    مشاهده مجموعه کتابخانه‌ها
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
