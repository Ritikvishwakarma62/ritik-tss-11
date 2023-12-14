import * as YUP from "yup";

const signupSchema = YUP.object({
    name: YUP.string().required("Enter Your Name"),
    email: YUP.string().email("Incorrect Email Id").required("Enter Your Email/UserName"),
    password: YUP.string().required("Enter Your Password"),
    repassword: YUP.string().oneOf([YUP.ref("password")],"Password and Re-Password Should be Same").required("Enter Your Repassword"),
    state: YUP.string().required("Select Your State"),
    city: YUP.string().required("Select Your City"),
    address: YUP.string().required("Enter Your Address"),
    gender: YUP.string().required("Select Your Gender"),
    contact : YUP.number().typeError("Enter Only Number").min(10000000,"Minimum 8 Digit").max(999999999999,"Maximum 12 Digit").required("Enter Your Number")
})

export default signupSchema