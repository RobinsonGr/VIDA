import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Box } from '@mui/material';
import { object, string } from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { fetchUserAuth } from '../features/authSlice';
import { submitLoginAPI } from '../api';

const loginSchema = object({
  email: string().email('Invalid email format').required('Email is required'),
  password: string().required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};


const LoginForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null)

  const submitLogin = async (values) => {
    try{
      await submitLoginAPI(values);
      dispatch(fetchUserAuth());
    } catch(err) {
      setError(err.message);
    }
  };

  return (
    <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '100vh', backgroundImage: 'url(https://i.ibb.co/j8QGDWN/eco-profile-background.jpg)',
    backgroundSize: 'cover', }}>
      <Grid item xs={12} sm={8} md={6}>
      <Box
      sx={{
        width: '350px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
      }}
>
          <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '20px', color: '#000' }}>
            Login
          </Typography>
          <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={submitLogin}>
            {({ values, handleChange }) => (
              <Form>
                <TextField
                  type="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                />
                <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

                {error && (
                  <Typography variant="body2" color="error" sx={{ textAlign: 'center', marginTop: '10px' }}>
                    {error}
                  </Typography>
                )}
                
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    fontSize: '16px',
                    padding: '10px 20px',
                  }}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
