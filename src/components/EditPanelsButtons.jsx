import { Link } from 'react-router-dom';
import { Grid, useMediaQuery } from '@mui/material';

function EditPanelButtons() {
    const isTabletOrSmaller  = useMediaQuery('(max-width:600px)');


    const addCategoriesButton = isTabletOrSmaller ? 'https://i.ibb.co/NLnmmfW/Add-or-edit-categories-under-600px-ECO.png' : 'https://i.ibb.co/sWQgF6D/Add-or-edit-categories-over-600-px-ECO.png';
    const addProductsButton = isTabletOrSmaller ? 'https://i.ibb.co/pPTmDRB/Add-or-edit-products-under-600px-ECO.png' : 'https://i.ibb.co/vDwCKQv/Add-or-edit-products-over-600-px-ECO.png';
  

    return (
        <Grid container sx={{maxWidth: '100%'}}> 

        <Grid item xs={6}>
        <Link to="/editcategories">
        <img
            src={addCategoriesButton}
            alt="Logo"
            style={{ height: '100%', width: '100%', maxWidth: '100%'}}
            />
        </Link>

        </Grid>

        <Grid item  xs={6}>
        <Link to="/editproducts">
            <img
                src={addProductsButton}
                alt="Logo"
                style={{ height: '100%', width: '100%', maxWidth: '100%'}}
            />
        </Link>

        </Grid>

        </Grid>
    )
}

export default EditPanelButtons