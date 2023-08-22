import React, {useState} from "react";
import './LoginForm.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";




function LoginForm(){

  const submit=async (e)=>{
    e.preventDefault()
    await axios.post("http://localhost:8080/user/Login",{
    email,
    password}).then((res)=>{
      console.log(res)
      localStorage.setItem("user",JSON.stringify(res.data.data) )
      if(res.data.data.accountType == 'Doctor'){
        console.log("doct")
        navigate("/doctor")
      }
      else if(res.data.data.accountType == "Patient"){
        console.log("patient")
        navigate("/patient")
        
      }else{
        console.log("main")
        navigate("/Main")
      }
    }).catch((err)=>{
      return err
    })
   
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const navigate=useNavigate("");
  
    return(
        <div>
        <div class="login">
        <div class="login-triangle"></div>
        
        <h2 class="login-header">Log in</h2>
      
        <form class="login-container">
          <p><input type="text" placeholder="User name"  value={email} onChange={(e)=>setEmail(e.target.value)} required/></p>
          <p><input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  required/></p>
          <p><input type="submit"  value="Log in" onClick={(e)=>submit(e)}/></p>
        </form>
      </div>
      
        </div>
    )
}

export default LoginForm;