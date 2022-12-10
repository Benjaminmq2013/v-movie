import Header from "../../components/Header"
import Input from "../../components/input"
import Button from "../../components/button"
import "./index.css"

const Login = () => {
  return (
    <div className="Login-container" >
      <div className="Login-mask">

        <Header className="Login-header" />
        <h2 className="Login-title" >Log in</h2>

        <form action="" className="login-form" >
          <Input label="Email" initialValue="eve.holt@reqres.in" />
          <Input label="Password" initialValue="cityslicka" type={"password"} className="login-password" />
          <a href="#" className="login-link" >Forgot your password?</a>
          <Button title="Login" />
          <a href="#" className="login-link" >Don't have an account? <strong>Sign up</strong> </a>
        </form>

      </div>
    </div>
  )
}

export default Login