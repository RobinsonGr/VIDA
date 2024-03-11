import { object, string } from "yup"

const loginSchema = object({
    email: string().email().required('Email is required'),
    password: string().required('the password is require')
});

const initialValues = {
    user: '',
    password: ''
}

const loginForm = () => {


const submitLogin = async (values) => {

    const formData = new FormData;

    

}



}