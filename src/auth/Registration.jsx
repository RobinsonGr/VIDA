import { Formik, Form, Field, ErrorMessage} from "formik";
import {object, string} from 'yup';
import { registerUser } from "../api";

const userSchema = object({
    name: string().required('Name is required'),
    address: string().required('Address name is required'),
    email: string().email().required('Email is required'),
    password: string().min(5, 'The password must cotain more than 5 characteres').required('the password is require')
});

const initialValues = {
    name: '',
    address: '',
    email: '',
    password: '',
};

 const  RegistrationForm = () => {

    const registrationSubmit =  async (values, {resetForm}) => {
        const formData = new FormData();
        
        //obj to formData special obj
        for(const valueKey in values) {
            formData.append(valueKey, values[valueKey]);
        }

        await registerUser(formData)
        
        //object with iterable protocol
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }

        //formikbag.resetForm(), formikbag contains isSubmitting as well, 
        resetForm();
        
    }


return(
    <Formik
    initialValues={initialValues}
    //validationSchema is a bult-in option to use with yup 
    validationSchema={userSchema}
    onSubmit={registrationSubmit}
    >
    <Form>
        <Field type="text" name="name"/>
        <ErrorMessage name="name"  component="div"/>
        <Field type="text" name="address"/>
        <ErrorMessage  name="address"  component="div"/>
        <Field type="text" name="email"/>
        <ErrorMessage name="email" component="div"/>
        <Field type="password" name="password"/>
        <ErrorMessage name="password"  component="div"/>
        <button type="submit">
            Submit
        </button>
    </Form>

    </Formik>
    )
}

export default RegistrationForm;