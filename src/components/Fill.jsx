import { useFormik } from "formik";
import React, { useState }  from "react";
import { userFillSchema } from "../schema";
const Fills=()=>{
const onSubmit = () => {
    console.log(values);
      setTimeout(() => {
        console.log(values);
        
      }, 3000); 
    }
   
    const {values,errors, handleChange, handleBlur, handleSubmit, isSubmitting, touched} = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            yob: "",
            email: "",
            course: "",
            county: "",
            
        },
        validationSchema: userFillSchema,
        onSubmit
    })

console.log(errors);

    return(
        <>
        <div className="form-area" style={{justifyContent:"center", margin:"100px"}}>
        <form onSubmit={handleSubmit} style={{padding:"20px", border:"1px solid black", borderRadius:"10px", width:"50%",margin:"auto" }}>

        <div style={{display:"flex"}}>
            <div className="form-group" style={{padding:"10px"}}>
                            <label for="text">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="text"
                                name="firstname"
                                value={values.firstname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="First Name" 
                                style = {errors.firstname && touched.firstname ? {borderColor: "rgb(255, 84, 84)"} :{}}
                                />
                                {errors.firstname && touched.firstname? <p style={{color:"rgb(255, 84, 84)"}}>{errors.firstname}</p> :''}
                        </div>
                        <div className="form-group" style={{padding:"10px"}}>
                            <label for="text">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="text"
                                name="lastname"
                                value={values.lastname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Last Name"
                                style = {errors.lastname && touched.lastname ? {borderColor: "rgb(255, 84, 84)"} :{}}
                                />
                                {errors.lastname && touched.lastname ? <p style={{color:"rgb(255, 84, 84)"}}>{errors.lastname}</p> :''}
                        </div>
        </div>

                    <div style={{display:"flex"}}>
                        <div className="form-group" style={{padding:"10px"}}>
                            <label for="date">Year of Birth</label>
                            <input
                                type="date"
                                className="form-control"
                                name="date"
                                value={values.date}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="date"
                                placeholder="date" 
                                style = {errors.date && touched.date ? {borderColor: "rgb(255, 84, 84)"} :{}}
                                />
                                {errors.date && touched.date ? <p style={{color:"rgb(255, 84, 84)"}}>{errors.date}</p> :''}
                        </div>
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
                                placeholder="Email" 
                                style = {errors.email && touched.email ? {borderColor: "rgb(255, 84, 84)"} :{}}
                                />
                                {errors.email && touched.email ? <p style={{color:"rgb(255, 84, 84)"}}>{errors.email}</p> :''}
                        </div>
                    </div>
                    <div style={{display:"flex"}}>
                        <div className="form-group" style={{padding:"10px"}}>
                            <label for="text">course</label>
                            <input
                                type="text"
                                className="form-control"
                                id="course"
                                name="course"
                                value={values.course}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="course" 
                                style = {errors.course && touched.course ? {borderColor: "rgb(255, 84, 84)"} :{}}
                                />
                                {errors.course && touched.course ? <p style={{color:"rgb(255, 84, 84)"}}>{errors.course}</p> :''}
                        </div>
                        <div className="form-group" style={{padding:"10px"}}>
                            <label for="">County</label>
                            <input
                                type="text"
                                className="form-control"
                                id="county"
                                name="county"
                                value={values.county}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="County" 
                                style = {errors.county && touched.county ? {borderColor: "rgb(255, 84, 84)"} :{}}
                                />
                                {errors.county && touched.county ? <p style={{color:"rgb(255, 84, 84)"}}>{errors.county}</p> :''}
                        </div>
                    </div>
                 
                  
                    <br/>
                    <button disabled={isSubmitting} type="submit" className="btn btn-info" style={{width:"100%"}}>Submit</button>
                </form>
        </div>
        </>
        
    )

}
export default Fills