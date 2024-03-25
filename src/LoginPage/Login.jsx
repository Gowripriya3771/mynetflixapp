import { useEffect, useRef } from "react";
import "./Login.css";
import Home from "../Home/Home";
function Login() {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  // const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = () => {
    if (
      //.current which can be accessed using ref
      email.current.value === "abc@gmail.com" &&
      password.current.value === "12345"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345");
    }else{
      alert("Invalid username or password")
    }
  };

  return (
    <div className="login">
      {getEmail && getPassword ? (
        <Home />
      ) : (
        <div
          className="main"
          style={{
            backgroundImage:
              "url('https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?auto=webp&s=9659527da9196c27a8875200b41d20a8e901c341')",
          }}
        >
          <div className="loginBox">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <div className="form">
                <div>
                  <input
                    className="emailInput"
                    type="text"
                    ref={email}
                    value="abc@gmail.com"
                  ></input>
                </div>
                <div>
                  <input
                    className="passwordInput"
                    type="password"
                    ref={password}
                    // value="12345"
                  ></input>
                </div>

                <button className="btn">Sign In</button>
              </div>
              <div className="help">
                <div className="remember">
                  <input value="true" type="checkbox"></input>
                  <label>Remember me</label>
                </div>

                <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help?</a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
