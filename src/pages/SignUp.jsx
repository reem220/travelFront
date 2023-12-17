import ax from "axios";
import React, { useState } from "react";
import { Circles } from "react-loader-spinner";
//import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [username, setusername] = useState("");

  const [password, setPassword] = useState("");
  //const navigate=useNavigate()
  const authAuth_COntainer = document.querySelector(".Auth_COntainer");
const inputs={ email, password, username }
  function removecard() {
    authAuth_COntainer.className = "d-none";
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email||!password||!username){alert("Yor Data is invalid")}
   
    else{ 
      try {
        setIsLoading(true);
        
      const response = await ax.post(
      "https://diaryb.onrender.com/api/user/signup",
      inputs
    );
    if (response.data) {
      removecard();
      window.location.reload()


    }
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response.data);
    setIsLoading(false);
            window.location.reload()

  } catch (error) {
    setIsLoading(false);
  }}
  };

  return (
    <>
      <div className="Auth_COntainer container p-4 position-fixed p-5 shadow-lg rounded-5 w-50 ">
        <div className="herder_Card d-flex justify-content-between ">
          <h2 className="ps-5 text-center fw-bolder text-white w-100">
            S I G N U P
          </h2>
          <div
            className=" btnclose  text-white bg-transparent cursor-pointer "
            role="button"
            onClick={removecard}
          >
            X
          </div>
        </div>

        <form className="w-75 mx-auto my-5 fs-5" onSubmit={handleSubmit}>
          {/* Username */}
          <label htmlFor="username">username:</label>

          <input
            className="form-control mb-3 "
            type="text"
            onChange={(e) => setusername(e.target.value)}
            value={username}
            placeholder="Enter Your username "
          />
          {/* Email*/}
          <label htmlFor="email">email:</label>

          <input
            className="form-control mb-3 "
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Your Email "
          />
          {/* Password */}
          <label htmlFor="password">password:</label>

          <input
            className="form-control mb-3"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter Your Password "
          />

          <div className="buttons">
            {" "}
            {isLoading ? (
              <button className="btn_Login btn rounded-5 p-2 form-btn   m-auto  d-block">
                <Circles
                  height="30"
                  width="30"
                  color="#4fa94d"
                  ariaLabel="circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </button>
            ) : (
              <button
              
                type="submit"
                className="btn_Login btn rounded-5 p-2 form-btn    m-auto   d-block"
              >
                S i G N U P
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
export default SignUpForm;
