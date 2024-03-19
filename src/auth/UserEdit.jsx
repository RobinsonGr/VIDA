import TextField from '@mui/material/TextField';
import { Field, useFormik} from "formik";
import { useSelector } from "react-redux";
import {object, string} from 'yup';


const validationSchema = object({
    name: string().required('Name is required'),
    address: string().required('Address is required')
    
})

function UserEdit () {
    
    const {name, address} = useSelector(state => state.auth)

    const initialValues = {
        name: name || '',
        address: address || ''
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange} 
            error={formik.touched.name && Boolean(formik.errors.name)} 
            helperText={formik.touched.name && formik.errors.name} 
       />

       <TextField
            name="address"
            label="Address"
            variant="outlined"
            fullWidth
            value={formik.values.address}
            onChange={formik.handleChange} 
            error={formik.touched.address && Boolean(formik.errors.address)} 
            helperText={formik.touched.address && formik.errors.address} 
       />

       {/* ... rest of your form components */}
    </form>
  );}

export default UserEdit;