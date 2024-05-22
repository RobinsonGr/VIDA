import React, { useState } from "react";
import { useFormik } from "formik";
import { object, string, number } from "yup";
import { addProduct } from "../../api";
import { TextField, Button, Typography, Box } from "@mui/material";

const validationSchema = object({
  name: string().required("A name is required"),
  price: number().required("A price is required"),
  url: string(),
  description: string().required("A description is required"),
  stock: number().required("The stock is required"),
});

function AddProduct({selectedCategory, setProductAdded, productAdded}) {

  //A predefined img will be set in the backend if none  is set
  const initialValues = {
    name: "",
    price: "",
    img: null,
    description: "",
    stock: "",
    selectedCategory: selectedCategory
  };

  const handleSubmit = async (values, { resetForm }) => {
    await addProduct(values);
    setProductAdded(true);
    resetForm();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 600,
        margin: "auto",
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {productAdded ? (
        <>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            The product was added successfully
          </Typography>
          <Button onClick={() => setProductAdded(false)} variant="outlined">
            Add One More
          </Button>
        </>
      ) : (
        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            fullWidth
            sx={{ marginBottom: "15px" }}
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
            fullWidth
            sx={{ marginBottom: "15px" }}
          />

          <TextField
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: "15px" }}
          />

          <TextField
            label="Stock"
            name="stock"
            value={formik.values.stock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.stock && Boolean(formik.errors.stock)}
            helperText={formik.touched.stock && formik.errors.stock}
            fullWidth
            sx={{ marginBottom: "15px" }}
          />

          <TextField
            label="Image Link"
            name="img"
            value={formik.values.img}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            sx={{ marginBottom: "15px" }}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      )}
    </Box>
  );
}

export default AddProduct;
