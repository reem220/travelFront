import axios from "axios";
import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
//import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(null);

  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.setItem("login", true);
  }, []);
  const authAuth_COntainer = document.querySelector(".Auth_COntainer");

  function removecard() {
    authAuth_COntainer.className = "d-none";
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const inputs = { email, password };
      console.log(inputs);
      const response = await axios.post(
        "https://diaryb.onrender.com/api/user/login",
        inputs
      );
      if (response) {
        removecard();
      }
      // navigate("/");

      localStorage.setItem("user", JSON.stringify(response.data));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      alert(" Input your Invalid Data");
    }
  };

  return (
    <>
      <div className="Auth_COntainer container p-4 position-fixed p-5 shadow-lg rounded-5 w-50 ">
        <div className="herder_Card d-flex justify-content-between ">
          <h2 className="ps-5 text-center fw-bolder text-white w-100">
            L O G I N{" "}
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
                L o g i n
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
export default AuthForm;
