const URL = 'http://localhost:3000'

function getCategories () {
    return fetch(`${URL}/categories`)
        .then(response => response.json())
        .then(data => data)
    }

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
        console.log(message)
        return message
    })
}

function getAuthValidation () {
    //a boolean is expected wrapped inside an obj
    return fetch(`${URL}/user/checkLogin`)
    .then(response => response.json())
    .then(data => data.isAuth)
};

function submitLoginAPI (userCredentials) {
    return fetch(`${URL}/user/login`, {
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        body: userCredentials

    })
    .then(response => response.json())
    .then(data => data)
}


export {getProducts, getCategories, getAuthValidation, registerUser, submitLoginAPI};