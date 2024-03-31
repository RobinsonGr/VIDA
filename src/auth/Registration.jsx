import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { registerUser } from '../api';
import { Grid, Box, TextField, Button, Typography } from '@mui/material'; 

const userSchema = object({
    name: string().required('Name is required'),
    address: string().required('Address name is required'),
    email: string().email().required('Email is required'),
    password: string().min(5, 'The password must cotain more than 5 characteres').required('the password is required')
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

        try{
            await registerUser(formData)
        } catch(error) {
            console.error('Error', error)
        }
        
        //object with iterable protocol to show in the console
        // for (var pair of formData.entries()) {
        //     (pair[0]+ ', ' + pair[1]); 
        // }

        //formikbag.resetForm(), formikbag contains isSubmitting as well, 
        resetForm();
        
    }

    return (
        <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '100vh', backgroundImage: 'url(https://freeimghost.net/images/2024/03/30/registration-login.jpeg)', backgroundSize: 'cover' }}>
          <Grid item>
            <Box 
              sx={{
                width: '350px', 
                margin: '20px auto', 
                padding: '20px',
                border: '1px solid #ddd', 
                borderRadius: '5px', 
                backgroundColor: 'rgba(255, 255, 255, 0.8)' 
              }}
            >
              <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '20px', color: '#000' }}>
                Registration
              </Typography> 
    
              <Formik initialValues={initialValues} validationSchema={userSchema} onSubmit={registrationSubmit}>
                <Form>
                  <TextField
                    type="text"
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2, '& .MuiOutlinedInput-root': { fontSize: '16px', padding: '10px' } }}
                  />
                  <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
    
                  <TextField
                    type="text"
                    name="address"
                    label="Address"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2, '& .MuiOutlinedInput-root': { fontSize: '16px', padding: '10px' } }}
                  />
                  <ErrorMessage name="address" component="div" style={{ color: 'red' }} />
    
                  <TextField
                    type="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2, '& .MuiOutlinedInput-root': { fontSize: '16px', padding: '10px' } }}
                  />
                  <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
    
                  <TextField
                    type="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2, '& .MuiOutlinedInput-root': { fontSize: '16px', padding: '10px' } }}
                  />
                  <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
    
                  <Button 
                    type="submit" 
                    variant="contained" 
                    fullWidth 
                    sx={{ mt: 2, fontSize: '16px', padding: '10px 20px' }}
                  >
                    Submit
                  </Button>
                </Form>
              </Formik>
            </Box> 
          </Grid> 
        </Grid> 
      );
    }
    
    export default RegistrationForm;
