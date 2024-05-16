import React, { useState, useEffect } from 'react';
import { addCategory, deleteCategory, editCategory, getCategoriesAPI } from '../api';
import { Button, Box, TextField, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '@emotion/react';


const CategoryPanel = () => {
  const theme = useTheme();

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState('');
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoriesAPI(); 
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    try {
      const newCat = await addCategory(newCategory);
      setCategories([...categories, newCat]);
      setNewCategory('');
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleEditCategory = async () => {
    if (!editCategoryId) return;

    try {
      const editedCat = await editCategory(editCategoryId, editCategoryName);
      setCategories(categories.map(cat => (cat.id === editedCat.id ? editedCat : cat)));
      setEditCategoryId(null);
      setEditCategoryName('');
    } catch (error) {
      console.error('Error editing category:', error);
    }
  };

  const handleDeleteCategory = async () => {
    if (!categoryIdToDelete) return;

    try {
      await deleteCategory(categoryIdToDelete);
      setCategories(categories.filter(cat => cat.id !== categoryIdToDelete));
      setOpenDeleteDialog(false);
      setCategoryIdToDelete(null);
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleOpenDeleteDialog = (id) => {
    setCategoryIdToDelete(id);
    setOpenDeleteDialog(true);
  };

  const handleEditClick = (category) => {
    setEditCategoryId(category.id);
    setEditCategoryName(category.name);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      width: '80%', 
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #e0e0e0',
      borderRadius: '5px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <Typography 
      sx={{color: theme.palette.primary.main }}
       >Category Management</Typography>

      <TextField
        label="New Category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddCategory}>Add Category</Button>
      <br />
      <br />
      {categories.map((category) => (
        <Box key={category.id}>
          {editCategoryId === category.id ? (
            <div>
              <TextField
                label="Edit Category"
                value={editCategoryName}
                onChange={(e) => setEditCategoryName(e.target.value)}
              />
              <Button variant="contained" onClick={handleEditCategory}>
                Save Changes
              </Button>
            </div>
          ) : (
            <Typography>
              {category.name}
            </Typography>
          )}
          <IconButton onClick={() => handleEditClick(category)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleOpenDeleteDialog(category.id)}>
          <DeleteIcon sx={{ color: theme.palette.primary.main }}/>
          </IconButton>
        </Box>
      ))}
      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
          It could affect the visibility of some products 
          </Typography>
          <Typography>
          Are you sure you want to delete this category?
          </Typography>
           </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDeleteCategory}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CategoryPanel;
