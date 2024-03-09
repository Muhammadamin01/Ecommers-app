import axios from "axios";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../context/Store";

const URL = "https://fakestoreapi.com/auth/login";

const Login = () => {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const { setUser } = useStore();

  const handleLogin = async () => {
    if (
      !username.current.value.trim().length ||
      !password.current.value.trim().length
    ) {
      return toast.warning("Iltimos barcha maydonni toldiring");
    }
    const data = {
      username: username.current.value,
      password: password.current.value,
    };

    //name:mor_2314
    //pass:83r5^_
    try {
      const response = await axios.post(URL, data);
      localStorage.setItem("token", response.data.token);
      setUser((prev) => ({ ...prev, isLoggedIn: false }));
      toast.success("Login successfully! ");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div className="back">
      <h1 className="text-center m-3">Log in</h1>
      <div>
        <h3 className="align-items-center">
          Already a member?{" "}
          <span className="text-primary ">
            Sign up <span className="fa-solid fa-arrow-right "></span>
          </span>
        </h3>

        <div className="row">
          <div className="col-10 ">
            <div className="forms">
              <form action="">
                <input
                  ref={username}
                  type="text"
                  className=""
                  placeholder="Firstname"
                />
                <input
                  ref={password}
                  type="text"
                  className=""
                  placeholder="Lastname"
                />
                <button
                  type="button"
                  className="btn btn-primary btn-sm my-4 w-25"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
          <div className="lines ">
            <div className="line"></div>
            <div className="mx-3">or sign up with</div>
            <div className="line"></div>
          </div>
          <div className="icons d-flex">
            <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
