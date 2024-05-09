const URL = 'http://localhost:3000'



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

function registerUser (FormData) {

    return fetch(`${URL}/user/register`, {
        method: 'POST',
       // headers: 'Content-Type': 'multipart/form-data,
       //this wont send images or complex files, so the brower will set it as  multipart/form ..., instead of
       //url encoded. In server i got to use multer when a formData is received to parse it.
        body: FormData
    })
    .then(response => response.json())
    .then(message => {
        (message)
        return message
    })
};

function getAuthValidation () {
    //a boolean is expected wrapped inside an obj
    return fetch(`${URL}/user/me`, {
      credentials: "include",
    })
    .then(response => response.json())
    .then(data => {
      (data)
      return data
    })
};

function submitLoginAPI(userData) {
   
    return fetch(`${URL}/user/login`, {
        method: 'POST',
        credentials: "include",
        headers: {
           // Accept: "application/json",
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(userData)
      })
      .then(responseRaw => {
        return responseRaw.json()
      })
      .then(response => response);      
};

function editUserAPI(dataUpdated) {
    
    return fetch(`${URL}/user/edituser`, {
        method: 'PUT',
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
        console.log(responseRaw)
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
    addProduct
};