import React, { useState } from "react";
import { useFormik } from "formik";
import { object, string, number } from "yup";
import { addProduct, editedProductAPI } from "../api";
import { TextField, Button, Typography } from "@mui/material";

const validationSchema = object({
  name: string().required("A name is required"),
  price: number().required("A price is required"),
  url: string(),
  description: string().required("A description is required"),
  stock: number().required("The stock is required"),
});

function AddProduct() {
  const [productAdded, setProductAdded] = useState(false);

  const initialValues = {
    name: "",
    price: "",
    img: null,
    description: "",
    stock: ""
  };

  const handleSubmit = async (values, {resetForm}) => {
    await addProduct(values)
    setProductAdded(true)
    resetForm()
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
   productAdded ? (
   <>
   <Typography variant="body1">
    The product was added successfully
   </Typography>
   <Button onClick={() => {setProductAdded(false)}}>Add one more</Button>
   </>) : ( 
    <form onSubmit={formik.handleSubmit}>
    <TextField
      label="Name"
      name="name"
      value={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.name && Boolean(formik.errors.name)}
      helperText={formik.touched.name && formik.errors.name}
    />

    <TextField
      label="Price"
      name="price"
      type="number"
      value={formik.values.price}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.price && Boolean(formik.errors.price)}
      helperText={formik.touched.price && formik.errors.price}
    />

    <TextField
      label="Description"
      name="description"
      value={formik.values.description}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.description && Boolean(formik.errors.description)}
      helperText={formik.touched.description && formik.errors.description}
    />

    <TextField
      label="Stock"
      name="stock"
      value={formik.values.stock}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched.stock && Boolean(formik.errors.stock)}
      helperText={formik.touched.stock && formik.errors.stock}
    />

    <TextField
      label="Image Link"
      name="img"
      value={formik.values.img}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />

    <Button type="submit" variant="contained" color="primary">
      Submit
    </Button>
  </form>)
  );
}

export default AddProduct;
