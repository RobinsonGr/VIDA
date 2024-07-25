const URL = import.meta.env.VITE_REACT_APP_BASE_URL



function getProduct(productId) {
    //Retrieveing the product list by category
   return fetch(`${URL}/products/individual/${productId}`)

    //Parsing the response as JSON
        .then((response) => response.json())
        //resolving the promise with the retrieved data
        .then((data) => {
            return data
        })
};


function addProduct(newProduct) {
    console.log(JSON.stringify(newProduct))

    //Retrieveing the product list by category
   return fetch(`${URL}/products/`, {
    method: 'POST',
    body: JSON.stringify(newProduct),
    headers: {
        'Content-Type': 'application/json'
    }  
   })

    //Parsing the response as JSON
        .then((response) => response.json())
        //resolving the promise with the retrieved data
        .then((data) => {
            return data
        })
};

function editedProductAPI(editedProduct) {
    //Retrieveing the product list by category
   return fetch(`${URL}/products`,
    {
    method: 'PUT',
    body: JSON.stringify(editedProduct),
    //here wihtout the header, the browser probably was setting other header and this throw error
    headers: {
        'Content-Type': 'application/json'
    }    
    })
    //Parsing the response as JSON
        .then((response) => response.json())
        //resolving the promise with the retrieved data
        .then((data) => {
            return data
        })
        .catch((err) => (console.log(err)))
};

function getProductsbyCategoryId(categoryId) {
    //Retrieveing the product list by category
   return fetch(`${URL}/products/bycategoryid/${categoryId}`)

    //Parsing the response as JSON
        .then((response) => response.json())
        //resolving the promise with the retrieved data
        .then((data) => {
            return data
        })
};

async function deleteProduct(id) {
    try {
        const response = await fetch(`${URL}/products/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
}


async function registerUser(formData) {
    const response = await fetch(`${URL}/user/register`, {
      method: 'POST',
      body: formData
    });
  
    if (!response.ok) {
      const errorData = await response.json(); 
      const errorMessage = errorData.message || 'Network response was not ok'; 
      throw new Error(errorMessage); 
    }
  
    return response.json();
  }

function getAuthValidation () {
    //a boolean is expected wrapped inside an obj
    return fetch(`${URL}/user/me`, {
      credentials: "include",
    })
    .then(response => response.json())
    .then(data => {
    console.log({
        getAuth: data
    })
      return data
    })
};

function submitLoginAPI(userData) {
    return fetch(`${URL}/user/login`, {
        method: 'POST',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(userData)
      })
      .then(responseRaw => {
        if (!responseRaw.ok) {
          return responseRaw.json().then(error => {
            throw new Error(error.message || 'An error occurred');
          });
        }
        return responseRaw.json();
      })
      .then(data => {
        console.log(data)
        return data;
      })
      .catch(error => {
        throw error; 
      });
};

function editUserAPI(dataUpdated) {
    
    return fetch(`${URL}/user/edituser`, {
        method: 'PUT',
        credentials: "include",
        headers: {
            // Accept: "application/json",
             'Content-Type': 'application/json' 
         },
        body: JSON.stringify(dataUpdated)
    })
    .then(responseRaw => responseRaw.json())
    .then(response => response)
};


function logOutAPI() {
    return fetch(`${URL}/user/logout`, {
        method: 'GET',
        credentials: 'include' 
    })
    .then(responseRaw => {
        if (!responseRaw.ok) {
            throw new Error('Logout failed');
        }
        return responseRaw.json();
    })
    .then(response => response)
    .catch(error => {
        console.error('Error with logging:', error);
        throw error; 
    });
};

function getCategoriesAPI () {
    return fetch(`${URL}/categories`)
        .then(response => response.json())
        .then(data => data)
    };

function getProducts(categoryURL) {
    //Retrieveing the product list by category
   return fetch(`${URL}/products/${categoryURL}`)

    //Parsing the response as JSON
        .then((response) => response.json())
        //resolving the promise with the retrieved data
        .then((data) => {
            return data
        })
};


//Getting directly the response without the need to use .then
async function addCategory(name, url) {
    try {
        const response = await fetch(`${URL}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, url })
        });
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error adding category:', error);
        throw error;
    }
}

async function editCategory(id, name, categoryURL) {
    try {
        const response = await fetch(`${URL}/categories/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, categoryURL })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error editing category:', error);
        throw error;
    }
}

async function deleteCategory(id) {
    try {
        const response = await fetch(`${URL}/categories/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
}


export {
    getProduct,
    getProducts, 
    getCategoriesAPI, 
    getAuthValidation, 
    registerUser, 
    submitLoginAPI,
    editUserAPI,
    getProductsbyCategoryId,
    editedProductAPI,
    logOutAPI,
    addProduct,
    addCategory,
    editCategory,
    deleteCategory,
    deleteProduct
};


