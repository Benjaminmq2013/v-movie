import "./index.css"

import Header from "../../components/Header"
import Input from "../../components/input"
import Button from "../../components/button"
import postCredentials from '../../auth/postCredentials';

import { useState  } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin, setLogOut } from "../../store/auth";
import { setChecking } from "../../store/auth";
import { useNavigate } from 'react-router-dom';


export interface loginProps{
  email: string,
  password: string,
}

const Login = () => {
  

  const dispatch = useDispatch()
  const handleSetCredentials = (token: string) => dispatch(setLogin(token))
  const handleRemoveCredentials = () => dispatch(setLogOut())

  const [value, setValue] = useState<loginProps>({ email: "eve.holt@reqres.in", password: "cityslicka"  })

  const setEmail = (input: string) => setValue({...value, email: input })
  const setPassword = (input: string) => setValue({...value, password: input })
  const navigate = useNavigate();
  const navigateHome = () => navigate("/")


  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) =>{ 
    e.preventDefault()
    dispatch(setChecking())
    postCredentials({ email: value.email, password: value.password, onSuccess: handleSetCredentials, onError:handleRemoveCredentials, redirect: navigateHome })
  }

  

  return (
    <div className="Login-container" >
      <div className="Login-mask">

        <Header className="Login-header" />
        <h2 className="Login-title" >Log in</h2>

        <form action="" className="login-form" onSubmit={ handleSubmit } >
          <Input label="Email" value={ value.email } setValue={ setEmail } required />
          <Input label="Password" value={ value.password } setValue={setPassword} type={"password"} className="login-password" required />
          <a href="#" className="login-link" >Forgot your password?</a>
          <Button title="Login" />
          <a href="#" className="login-link" >Don't have an account? <strong>Sign up</strong> </a>
        </form>

      </div>
    </div>
  )
}

export default Login