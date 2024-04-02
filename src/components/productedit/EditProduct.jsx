import { useState } from "react";
import { useFormik } from "formik";
import { object, string, number } from "yup";
import { editedProductAPI } from "../../api";
import { TextField, Button, Typography, Grid, Box } from "@mui/material";

const validationSchema = object({
  name: string().required("A name is required"),
  price: number().required("A price is required"),
  url: string(),
  description: string().required("A description is required"),
  stock: number().required("The stock is required")
});

function EditProduct({ productData, handleProductEdited }) {
  const { name, id, price, img, description, stock } = productData;
  const [editedProductState, setEditedProductState] = useState(false);

  const initialValues = {
    name: name || "",
    price: price || "",
    img: img || "",
    description: description || "",
    stock: stock || "",
  };

  const handleSubmit = async (values) => {
    await editedProductAPI({ id, ...values });
    handleProductEdited();
    //this came from AdminProductPanel, after edit the product, it will close with null
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Box
    
    >
      {editedProductState ? (
        <Typography variant="body1">
          The {name} was edited successfully
        </Typography>
      ) : (
        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
          <TextField
            fullWidth
            sx={{ marginBottom: "15px" }}
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            fullWidth
            sx={{ marginBottom: "15px" }}
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
            fullWidth
            sx={{ marginBottom: "15px" }}
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />

          <TextField
            fullWidth
            sx={{ marginBottom: "15px" }}
            label="Stock"
            name="stock"
            value={formik.values.stock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.stock && Boolean(formik.errors.stock)}
            helperText={formik.touched.stock && formik.errors.stock}
          />

          <TextField
            fullWidth
            sx={{ marginBottom: "15px" }}
            label="Image Link"
            name="img"
            value={formik.values.img}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Button
            sx={{ marginTop: "20px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      )}
    </Box>
  );
}

export default EditProduct;
