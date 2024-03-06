import React from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import {object, string} from 'yup';

const userSchema = object({
    name: string().required('Name is required'),
    lastName: string().required('Last name is required'),
    email: string().email().required('Email is required'),
    password: string().min(5, 'The password must cotain more than 5 characteres').required('the password is require')
});


const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
};

 const RegistrationForm = () => {


    const registrationSubmit = (values, {resetForm}) => {
        const formData = new FormData();

        for(const valueKey in values) {
            formData.append(valueKey, values[valueKey]);
        }

    //  console.log(Object.fromEntries(formData));

        resetForm();
    }


return(
    <Formik
    initialValues={initialValues}
    validationSchema={userSchema}
    onSubmit={registrationSubmit}
    >
    <Form>
        <Field type="text" name="name"/>
        <ErrorMessage name="name"  component="div"/>
        <Field type="lastName" name="lastName"/>
        <ErrorMessage  name="lastName"  component="div"/>
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