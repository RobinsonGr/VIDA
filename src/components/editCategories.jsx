import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const EditCategories = () => {
  // Mock categories data
  const mockCategories = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
  ];

  const [categories, setCategories] = useState(mockCategories); // Initialize with mock categories
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  return (
    <div>
      <TextField
        label="New Category"
        variant="outlined"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddCategory}>
        Add Category
      </Button>
      <List>
        {categories.map((category, index) => (
          <ListItem key={index}>
            <ListItemText primary={category} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteCategory(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default EditCategories;
