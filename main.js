let collections = [
    {
        id: 'o',
        Name: 'Hoodies', 
        Price: 14.00,
        Stock: 10,
        urlImage: "./featured1.png" 
    },
    {
        id: '1',
        Name: 'Shirts', 
        Price: 24.00,
        Stock: 15,
        URLImage: "./featured2.png" 
    },
    {
        id: '2',
        Name: 'Sweatshirts', 
        Price: 24.00,
        Stock: 20,
        URLImage: "./featured1.png" 
    }
]

const products = document.querySelector(".products");

function printProductos(){
    let html= 'Hola que mas';

    collections.forEach(function (collection) {
        html += `
        <div class = "product">
        <div class = "product__img">
            <img src 
    });

    products.innerHTML = html;

}

printProductos()