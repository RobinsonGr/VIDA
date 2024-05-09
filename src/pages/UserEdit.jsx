import React from 'react';
import { TextField, Button } from '@mui/material';
import { Field, useFormik } from "formik";
import { useSelector } from "react-redux";
import { object, string } from 'yup';
import { editUserAPI } from '../api';

const validationSchema = object({
    name: string().required('Name is required'),
    address: string().required('Address is required')
});

function UserEdit() {
    const { name, address, email } = useSelector(state => state.auth);

    const initialValues = {
        name: name || '',
        address: address || '',
        email: email || '',
        password: '*********'
    };

    const handleSubmit = async ({ name, address }, { resetForm }) => {
        try {
            await editUserAPI({ name, address });
        } catch (err) {
            console.error(err);
        }
        resetForm();
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <TextField
                name="name"
                label="Name"
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
                name="address"
                label="Address"
                variant="outlined"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
            />

            <TextField
                name="email"
                label="E-mail"
                disabled={true}
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && !!(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
                name="password"
                disabled={true}
                label="Password"
                variant="outlined"
                type="password" // Set input type to password
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button variant="contained" type="Submit" style={{ marginTop: '1rem' }}>Save changes</Button>
        </form>
    );
}

export default UserEdit;
