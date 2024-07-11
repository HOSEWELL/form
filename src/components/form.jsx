import { useFormik } from "formik";
import React, { useState }  from "react";
const UserForm=()=>{
const onSubmit = () => {
      setTimeout(() => {
        console.log(values);
        
      }, 3000); 
    }
   
    const {values, handleChange, handleBlur, handleSubmit, isSubmitting} = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit
    })



    return(
        <>
        <div className="form-area" style={{justifyContent:"center", margin:"100px"}}>
        <form onSubmit={handleSubmit} style={{padding:"20px", border:"1px solid black", borderRadius:"10px", width:"50%", }}>
                    <div className="form-group" style={{padding:"10px"}}>
                        <label for="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            placeholder="Email" />
                    </div>
                    <div className="form-group" style={{padding:"10px"}}>
                        <label for="age">Age</label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            name="age"
                            value={values.age}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Age" />
                    </div>
                    <div className="form-group" style={{padding:"10px"}}>
                        <label for="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Password" />
                    </div>
                    <div className="form-group" style={{padding:"10px"}}>
                        <label for="confirmPassowrd">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="confirmPassword"
                            placeholder="Confirm Password" />
                    </div>
                    <br/>
                    <button disabled={isSubmitting} type="submit" className="btn btn-info">Submit</button>
                </form>
        </div>
        </>
        
    )

}
export default UserForm


