import "./Login.css";
import Pic from "./login-img.jpg";

function Login() {
  return (
    <div className="login-full-page">
      <div className="login-page">
        <div className="login-head">
          <h1 className="login-heading blue-text">Login</h1>
          <p>Login to your account.</p>
        </div>
        <div className="login-middle">
          <p className="blue-text">E-mail address</p>
          <input type="text" />
          <p className="blue-text">Password</p>
          <input type="password" />
          <br />
          <div className="login-reset">
            <div className="login-check">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <p className="blue-text">
              <a href="#">Reset Password?</a>
            </p>
          </div>
        </div>
        <div className="login-submit">
          <button>Sign in</button>
          <p>
            Don't have an account yet?
            <a href="#" className="blue-text">
              Join KRIS today.
            </a>{" "}
          </p>
        </div>
      </div>
      <div className="img">
        <div className="blue-bg"></div>
        <p className="side-bg-text">
          Manage all <span>HR Operations</span> from <br /> the comfort of your
          home.
        </p>
        <div className="bg-bar">
          <div className="bar yellow-bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <img src={Pic} alt="img" />
      </div>
    </div>
  );
}
export default Login;
