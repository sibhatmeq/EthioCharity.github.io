import React from 'react'
import Footer from '../Footer';
 class Register extends React.Component {
    constructor(props) {
    super(props);
  }
   
  render() {
    return (
      <div>
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="form">

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="email" name="username" placeholder="username" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footerreg">
          <button type="button" className="buttonToLink">
            save
          </button>
        </div>
        
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Register;
