import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function Login() {
    

    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const[emailErr , setemailErr ]=useState(false)
    const[passwordErr, setPasswordErr]=useState(false)
    const history = useHistory();

    function loginHandle(e){
        e.preventDefault();
        
    }

    function emailHandler(e){
        let item =e.target.value =email;
        let errors = {};
        let isValid = true;

        if (!item["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
          }
          if (typeof item["email"] !== "undefined") {
          
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(item["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid email address.";
            }
          }


        


    }
    function passwordHandler(e){
        let item =e.target.value =password;
        let errors = {};
        let isValid = true;

        if (!item["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
          }
    }

    useEffect(() => {
        if(localStorage.getItem('user-info')){
             history.push("./add ")
          
        }
    },[] ) 

 async function login(){
     console.warn(email, password);
     let item={email,password}
 let result = await fetch("http://localhost:5000/api/v1/login",{
         method:'POST', 
         headers:{
             "Content-Type":"application/json",
             "Accept":"application/json"
         },
        body:JSON.stringify(item)
        });
        result =await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("./add")
 }
   
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Log In</h1>
           <form onSubmit={loginHandle}>
           <div className="col-sm-6 offset-sm-3">
           <input type="email"  value={email}  onChange={(e)=>setEmail(e.target.value)} className="form-control"   placeholder="email"  required />{emailErr
           ?<span>User Not Valid </span>:""}
           <br/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"  placeholder="password"  required/>{passwordErr
           ?<span>Password Not Valid </span>:""}
            <br/>
           <button onClick={login} className="btn btn-primary">Log In</button>
           </div>
           </form>
        </div>
    )
}

export default Login;
