const URL = 'http://localhost:3000'

function getProducts(categoryURL) {
    //Retrieveing the product list throughtout the classical method  of chaning 'then'
   return fetch(`${URL}/products/${categoryURL}`)
    //Parsing the response as JSON
        .then((response) => response.json())
        //resolving the promise with the retrieved data
        .then((data) => {
            return data
        })
};

function getCategories() {
    return fetch(`${URL}/categories`)
        .then((response) => response.json())
        .then((data) => data)
};

export {getProducts, getCategories};
