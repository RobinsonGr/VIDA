import React from 'react';
import { useFormik, ErrorMessage } from 'formik'; 
import { object, string } from 'yup';
import { registerUser } from '../api'; 
import { Grid, Box, TextField, Button, Typography } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';

const userSchema = object({
  name: string().required('Name is required'),
  address: string().required('Address name is required'),
  email: string().email('Enter a valid email').required('Email is required'),
  password: string().min(5, 'The password must contain more than 5 characters').required('The password is required')
});

const initialValues = {
  name: '',
  address: '',
  email: '',
  password: '',
};


const  RegistrationForm = () => {
  const navigate = useNavigate()
  
  const handleSubmit =  async (values, {resetForm}) => {
    const formData = new FormData();
    
      //obj to formData special obj
      for(const valueKey in values) {
          formData.append(valueKey, values[valueKey]);  
      }

      try{
          await registerUser(formData)
          navigate('/login')

      } catch(error) {
          console.error('Error', error)
      }
      
      //object with iterable protocol to show in the console
      // for (var pair of formData.entries()) {
      //     (pair[0]+ ', ' + pair[1]); 
      // }

      //formikbag.resetForm(), formikbag contains isSubmitting as well,   
      // But its better to include a redirection to login    
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,
    onSubmit: handleSubmit,
  });

  
  return (
    <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '100vh', backgroundImage: 'url(https://freeimghost.net/images/2024/03/30/registration-login.jpeg)', backgroundSize: 'cover' }}>
      <Grid item>
        <Box 
          style={{
            width: '350px', 
            margin: '20px auto', 
            padding: '20px',
            border: '1px solid #ddd', 
            borderRadius: '5px', 
            backgroundColor: 'rgba(255, 255, 255, 0.8)' 
          }}
        >
          <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '20px', color: '#000' }}>
            Registration
          </Typography> 
  
          <form onSubmit={formik.handleSubmit}> 
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
  
            <TextField
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
  
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
  
            <TextField
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
  
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              style={{ mt: '2px', fontSize: '16px', padding: '10px 20px' }}
            >
              Submit
            </Button>
          </form> 
        </Box> 
      </Grid> 
    </Grid>
  );
}

export default RegistrationForm;