import * as yup from "yup";

const PasswordRegEx = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

export const userFillSchema = yup.object().shape({
    email: yup.string().email("Email must be valid").required("Email is required"),
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    yob: yup.date(),
    county: yup.string().required("County is required"),
    course: yup.string().required("Course is required"),
})


export const userFormSchema = yup.object().shape({
    email: yup.string().email("Email must be valid").required("Email is required"),
    age: yup.string().required("Age is required"),
    
  
    password: yup.string().matches(PasswordRegEx, "Password must be at least 8 characters long and contain at least one letter, one number and one special character").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm password is required")

   

})