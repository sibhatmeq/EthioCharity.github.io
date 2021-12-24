import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

function Signup() {
    const[name, setName]=useState("")
    const[email, setEmail]=useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword]=useState("")
    const history= useHistory();
     
  async function Sign(){
       let item ={name, email, password, confirmPassword}
       console.log(item);

  
    let result = await fetch("http://localhost:5000/api/v1/users",{
          method:'POST',
          body:JSON.stringify(item),
          headers:{
              "Content-Type":"application/json",
               "Accept":"application/json  "
          }
      })
      result = await result.json()
      localStorage.setItem("user info", JSON.stringify(result))
     history.push("./App")
   }

    return (
        <div>
            <form>
        <div className="col-sm-6 offset-sm-3 ">
         <h1 style={{textAlign:'center'}}>Sign Up</h1>
         <input type="text" value={name} onChange={(e)=>setName(e.target.value)}    className="form-control" placeholder="Name"  autoComplete="on"/>
         <br/>
         <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email"  autoComplete="on"/>
         <br/>
         <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" autoComplete="on"/>
         <br/>
         <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control" placeholder="Confirm Password" autoComplete="on"/>
         <br/>
         <button  onClick={Sign} className="btn btn-primary">Submit</button>
        </div>
            </form> 
        </div>
            
    )
}

export default Signup;
