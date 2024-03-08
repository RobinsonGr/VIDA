const URL = 'http://localhost:3000'

<<<<<<< HEAD
function getProducts(categoryID) {
    //Retrieveing the product list throughtout the classical method  of chaning 'then'
   return fetch(`${URL}/products/${categoryID}`)
=======
function getProducts(categoryURL) {
    //Retrieveing the product list throughtout the classical method  of chaning 'then'
   return fetch(`${URL}/products/${categoryURL}`)
>>>>>>> test2
    //Parsing the response as JSON
        .then((response) => response.json())
        //resolving the promise with the retrieved data
        .then((data) => {
            return data
        })
};

export {getProducts};