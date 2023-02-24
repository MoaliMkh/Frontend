import "./Library.css";
import back_img from "../LibBackground.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import gmail from "../gmail.png";
import req from "../api/req";

function Library() {
  const [passwordEquality, setPasswordEquality] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const passwordVisibility = () => {
    var x = document.getElementById("password1");
    var y = document.getElementById("password2");

    if (x.type === "password" && y.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  };

  const passwordEqualityChecker = () => {
    // var password1 = document.getElementById("password1");
    // var password2 = document.getElementById("password2");
    if (password === secondPassword) {
      setPasswordEquality(true);
      console.log(passwordEquality);
    } else {
      setPasswordEquality(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password };
    if (passwordEquality) {
      try {
        const res = await req.post("/register/", data);
        console.log(res.data);
      } catch (e) {
        alert(e);
        console.log(e);
      }
    } else {
      alert("Correct Your Information!");
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
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
    borderRadius: 10,
    height: 700,
  };

  const inputFieldStyle = {
    width: "90%",
    paddingLeft: "15%",
    paddingRight: "10%",
  };

  return (
    <div style={myStyle}>
      <div style={transStyle}>
        <p
          style={{ color: "white", textAlign: "center", marginBottom: 20 }}
          class="w-full"
        >
          کتابخانه
        </p>

        <div class="col s12 z-depth-6 card-panel">
          <div style={inputFieldStyle}>
            <div class="row">
              <div class="input-field col s12"></div>
            </div>

            <div class="row">
              <div class="input-field col s12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
