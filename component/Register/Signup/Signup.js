import React, { Component } from 'react'
 class Signup extends Component {
    render() {
        return (
  <div className="ClassName">
   <div className="wrapperf">
      <div className="titlef" >
        Registration Form
      </div>
      <div className="formf">
       <div className="inputfieldf">
          <label>First Name</label>
          <input type="text" className="inputf"/>
       </div>  
        <div className="inputfieldf">
          <label>Last Name</label>
          <input type="text" className="inputf"/>
       </div>  
       <div className="inputfieldf">
          <label>Password</label>
          <input type="password" className="inputf"/>
       </div>  
      <div className="inputfieldf">
          <label>Confirm Password</label>
          <input type="password" className="inputf"/>
       </div> 
        <div className="inputfieldf">
          <label>Gender</label>
          <div className="custom_selectf">
            <select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
       </div> 
        <div className="inputfieldf">
          <label>Email Address</label>
          <input type="text" className="inputf"/>
       </div> 
      <div className="inputfieldf">
          <label>Phone Number</label>
          <input type="text" className="inputf"/>
       </div> 
      <div className="inputfieldf">
          <label>Address</label>
          <textarea className="textareaf"></textarea>
       </div> 
      <div className="inputfieldf">
          <label>Postal Code</label>
          <input type="text" className="inputf"/>
       </div> 
      <div className="inputfield termsf">
          <label className="checkf">
            <input type="checkboxf"/>
            <span className="checkmarkf"></span>
          </label>
          <p>Agreed to terms and conditions</p>
       </div> 
      <div className="inputfieldf">
        <input type="submit" value="Register" className="btnf"/>
      </div>
      </div>
    </div>  

 </div>
        )
    }
}

export default Signup






// import React from 'react'
// // import userSchema from './UserValidation'
// // import *as  yup from 'yup'

// function Signup() {

//   const createUser = async(event)=>{
//         event.preventDefault();
//         let formData={
//              name:event.target[0].value,
//              email: event.target[1].value,
//              password:event.target[2].value
//         };
        
//         const isvalid = await userSchema.isValid(formData);
//         console.log(isvalid); 
//      }
//     return (
//         <div classNameName="main">
//         <section classNameName="signup">
//             <div classNameName="container">
//                 <div classNameName="signup-content">
//                     <div classNameName="signup-form">
//                         <h2 classNameName="form-title">Sign up</h2>
//                         <form method="POST" classNameName="register-form" id="register-form"  onSubmit={createUser}>
//                             <div classNameName="form-group">
//                                 <label for="name"><i classNameName="zmdi zmdi-account material-icons-name"></i></label>
//                                 <input type="text" name="name" id="name" placeholder="Your Name"  required/>
//                             </div>
//                             <div classNameName="form-group">
//                                 <label for="email"><i classNameName="zmdi zmdi-email"></i></label>
//                                 <input type="email" name="email" id="email" placeholder="Your Email"  required/>
//                             </div>
//                             <div classNameName="form-group">
//                                 <label for="pass"><i classNameName="zmdi zmdi-lock"></i></label>
//                                 <input type="password" name="pass" id="pass" placeholder="Password"  required/>
//                             </div>
//                             <div classNameName="form-group">
//                                 <label for="re-pass"><i classNameName="zmdi zmdi-lock-outline"></i></label>
//                                 <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"  required/>
//                             </div>
//                             <div classNameName="form-group">
//                                 <input type="checkbox" name="agree-term" id="agree-term" classNameName="agree-term" />
//                                 <label for="agree-term" classNameName="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" classNameName="term-service">Terms of service</a></label>
//                             </div>
//                             <div classNameName="form-group form-button">
//                                 <input type="submit" name="signup" id="signup" classNameName="form-submit" value="Register"/>
//                             </div>
//                         </form>
//                     </div>
//                     <div classNameName="signup-image">
//                         <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
//                         <a href="#" classNameName="signup-image-link">I am already member</a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </div>
    
//     );

// }

// export default Signup;
