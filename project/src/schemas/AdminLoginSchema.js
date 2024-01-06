import * as YUP from 'yup';

let loginSchema = YUP.object({
    username :YUP.string().required("Insert Your UserName"),
    password :YUP.string().required("Insert Your Password"),
})

export default loginSchema