import { useState } from "react";
import { useFormik } from "formik"
import { object, string, number } from "yup"
import { editedProductAPI } from "../api";
import { TextField, Typography, Button } from "@mui/material";

const validationSchema = object({
    name: string().required('A name is required'),
    price:  number('A price is required'),
    url: string(),
    description: string().required('A description is required')
}); 

function EditProduct ({productData}) {
    const [editingProductId, setEditingProductId] = useState(null)
    const {name, id, price, img, description} = productData
    
    console.log(productData)
    const initialValues = {
        name: name || '',
        price: price || '',
        img: img || '',
        description: description || ''
    }

   
  const handleEditingProduct = (id) => {
    if (editingProductId === id) {
      setEditingProductId(null); // Close the form if the same product is clicked again
    } else {
      setEditingProductId(id); // Open the form for the clicked product
    }
  };

    const handleSubmit = async (editedProduct) => {
        await editedProductAPI(editedProduct)
        setEditingProductId(null)
    }

    const formik = useFormik({
        initialValues: initialValues,
        validate: validationSchema,
        onSubmit: handleSubmit
    }) 

    console.log(name)
    console.log(editingProductId)

    return (
            editingProductId === id ? (
            <form onSubmit={formik.handleSubmit}> 
            <TextField
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            >
            </TextField>

            <TextField
            label="Price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            >
            </TextField>

            <TextField
            label="Description"
            name="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            >
            </TextField>

            <TextField
            label="Image Link"
            name="img"
            //There could be products in db with null as img field
            value={img ? img : ''}
            >
            </TextField>

            <button type="submit"> Submit</button>
            </form>
            ) : (
              <div key={id}>
                <Typography>{name}</Typography>
                <Button onClick={() => handleEditingProduct(id)}>Edit</Button>
                <Button>Delete</Button>
            </div>)
    )
}

export default EditProduct