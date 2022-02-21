

const init = () => {
    initArticles();
    var products = JSON.parse(localStorage.getItem('products'));
    displayArticles(products);
}

const displayArticles = (products) => {
    var articlesContainer = document.getElementById("articles-container");
        for(const prod of products){
        articlesContainer.innerHTML+= "<div class=\"anunt1\">"
        + "<div id =\"brand\">"+prod.marca+"</div>"
        + "<div id =\"model\">"+prod.model+"</div>"
        + "<div id =\"price\">"+prod.pret+"</div>"
        + "<div id =\"year\">"+prod.anFabricatie+"</div>"
        + "<div id =\"image-container\">"+
        "<img src=\""+prod.images[0]+"\"></img></div>\n"
    }
    console.log(articlesContainer.innerHTML);

}

const initArticles = () => {

    const products = [
        {
            id: 1,
            marca: 'audi',
            model: 'a6',
            pret: 11000,
            anFabricatie: 2014,
            images: ['E:\\css\\git-github-practice-exercises\\Web-vanzari\\img-masini\\audi1.jpg', 'E:\css\git-github-practice-exercises\Web-vanzari\img-masini\audi2.jpg'],
        },
        {
            id: 2,
            marca: 'audi',
            model: 'rs6',
            pret: 80000,
            anFabricatie: 2018,
            images: ['.\\img-masini\\audiDoi.1.jpg', 'E:\css\git-github-practice-exercises\Web-vanzari\img-masini\audiDoi.2.jpg'],
        },
        {
            id: 3,
            marca: 'bmw',
            model: 'seria 3',
            pret: 6000,
            anFabricatie: 2011,
            images: ['.\\img-masini\\bmw1.jpg', 'E:\css\git-github-practice-exercises\Web-vanzari\img-masini\bmw2.jpg'],
        },
        {
            id: 4,
            marca: 'vw',
            model: 'golf mk7',
            pret: 18000,
            anFabricatie: 2018,
            images: ['.\\img-masini\\golf1.jpg', 'E:\css\git-github-practice-exercises\Web-vanzari\img-masini\golf2.jpg'],
        },
        {
            id: 5,
            marca: 'mercedes',
            model: 'c300',
            pret: 22000,
            anFabricatie: 2013,
            images: ['.\\img-masini\\mercedes1.jpg', 'E:\css\git-github-practice-exercises\Web-vanzari\img-masini\mercedes3.jpg'],
        },
        {
            id: 6,
            marca: 'mercedes',
            model: 'e63',
            pret: 35000,
            anFabricatie: 2013,
            images: ['.\\img-masini\\mercedesDoi.1.jpg', 'E:\css\git-github-practice-exercises\Web-vanzari\img-masini\mercedesDoi.2.jpg'],
        },
        {
            id: 7,
            marca: 'vw',
            model: 'passat b8',
            pret: 16000,
            anFabricatie: 2018,
            images: ['.\\img-masini\\passat3.jpg', 'E:\css\git-github-practice-exercises\Web-vanzari\img-masini\passat1.jpg'],
        },
        {
            id: 8,
            marca: 'nissan',
            model: 'patrol Y6',
            pret: 7000,
            anFabricatie: 2001,
            images: ['.\\img-masini\\patrol1.jpg', 'E:\css\git-github-practice-exercises\Web-vanzari\img-masini\patrol3.jpg'],
        },
        {
            id: 9,
            marca: 'porsche',
            model: '911',
            pret: 44000,
            anFabricatie: 2005,
            images: ['.\\img-masini\\porsche1.jpg', 'E:\css\git-github-practice-exercises\Web-vanzari\img-masini\porsche3.jpg'],
        }
    
    
    ];
    
    localStorage.setItem('products',JSON.stringify(products));
}






// createTable();
// function createTable() {
//     const tableBody = document.querySelector("tbody");
//     tableBody.innerHTML = "";
//     for (let product of products) {
//         const tr = document.createElement("tr");
//         const item = {
//             marca: product.marca,
//             model: product.model,
//             anFabricatie: product.anFabricatie,
//             pret: product.pret,
//         }
//         const productProperties = Object.keys(item);
//         for (let property of productProperties) {
//             const td = document.createElement("td");
          
//             td.textContent = product[property];
//             tr.appendChild(td);
//         }
//         tableBody.appendChild(tr);
//     }
// }

// function filter(item) {
//     for (i = 0; i < products.length; i++) {
//       if (products[i].marca != item) {
//         products.slice(i + 1);
//       }    
//     } 
// }

// function createTable() {
//     const tableBody = document.querySelector("tbody");
//     tableBody.innerHTML = "";
//     const tr = document.createElement("tr");
//     const td = document.createElement("td");

//     for (let i = 0; i < products.length / 2; i++) {
//         // const item = {
//         //     marca: products[i].marca,
//         //     model:  products[i].model,
//         //     anFabricatie:  products[i].anFabricatie,
//         //     pret:  products[i].pret,
//         // }
//         // const productProperties = Object.keys(item);
//         // for(let x of productProperties){
//             td.textContent = 'marca: ' + products[i].marca + '<br>' + 'model: ' +  products[i].model;
//         // }
//         tr.appendChild(td);
//         tableBody.appendChild(tr);
//     }
// }
