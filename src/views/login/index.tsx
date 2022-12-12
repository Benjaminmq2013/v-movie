import Header from "../../components/Header"
import Input from "../../components/input"
import Button from "../../components/button"
import "./index.css"
import { useState } from 'react';
import fetchData from '../../api/fetchData';

export interface loginProps{
  email: string,
  password: string,
}

const Login = () => {

  const [value, setValue] = useState<loginProps>({ email: "eve.holt@reqres.in", password: "cityslicka"  })

  const setEmail = (input: string) => setValue({...value, email: input })
  const setPassword = (input: string) => setValue({...value, password: input })

  // const handleLogin = () => fetchData({ method: "post",  })

  return (
    <div className="Login-container" >
      <div className="Login-mask">

        <Header className="Login-header" />
        <h2 className="Login-title" >Log in</h2>

        <form action="" className="login-form" >
          <Input label="Email" value={ value.email } setValue={ setEmail } />
          <Input label="Password" value={ value.password } setValue={setPassword} type={"password"} className="login-password" />
          <a href="#" className="login-link" >Forgot your password?</a>
          <Button title="Login" />
          <a href="#" className="login-link" >Don't have an account? <strong>Sign up</strong> </a>
        </form>

      </div>
    </div>
  )
}

export default Login