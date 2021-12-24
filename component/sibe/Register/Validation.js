import React from 'react'

const Validation = (value) => {
    let errors ={};
    if(!value.name){
        errors.name="name is required"
    }
    if(!value.email){
        errors.email="email is required"
    }
    else if(!/\S+@\s+.\S+/.test(value.email)){
        errors.email="invalid email insert @"
    }

     if(!value.password){
        errors.password="password is required"
    } else if(value.password.length <5){
        errors.password="password must be more than five characters"
    }


    return errors;
}

export default Validation
