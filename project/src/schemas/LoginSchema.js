import * as YUP from "yup";

let loginSchema = YUP.object({
    email : YUP.string().email(" Email Id is Not Correct").required("Enter Your UserID/Email"),
    password : YUP.string().required("Enter Your Password")
})

export default loginSchema