allProducts()

const url = 'http://localhost:3000/api/cameras';

const id = document.location.search.substring(5);

const panier = [];

//En atttente de la function GetArticles - Seconde execution

async function allProducts() {

  //Await met en pause le code sur cette ligne jusqu'à ce que la promesse se realise, puis retourne la valeur resultante.
  const articles = await getArticles(); //En attente des objets de l'API
  const article = []; //Initialisation du panier qui contiendra les objets

  for (let i=0; i <articles.length; i++) { //Tant que la longueur du tableau article est supérieure à i alors

    article.push(articles[i]) //On push chaque article un par un dans le tableau

    displayProduct(articles[i], i) //Appel d ela fonction avec les paramètres souaités

    console.log(article);
  }
}

// Recuperation du resultat de la requête - Premiere execution
function getArticles() {
  return fetch('http://localhost:3000/api/cameras')
  .then((reponse) => {
    return reponse.json()
  })
  //L'instruction return specifie la valeur qui est renvoyée par la fonction
  .then((data) => {
    return data
  })
  .catch((error) => {
    alert('Une erreur est survenue lors de la requête HTTP')
  })
};

function displayProduct(article, position) {

const row = document.getElementById('row');

//Creation des Elements enfants row
let productColSm = document.createElement('div');
let productCard = document.createElement('div');
let productTitleDeux = document.createElement('h1');
let productImage = document.createElement('div');
let productLinkImg = document.createElement('a');
let productImg = document.createElement('img');
let productCardBody = document.createElement('div');
let productlinkProduct = document.createElement('a');
let productTitleTrois = document.createElement('h3');
let productDescrip = document.createElement('p');
let productPrice = document.createElement('p');
let productLinkButton = document.createElement('a');
let productButton = document.createElement('button');
let productButtonDeux = document.createElement('button');

//Ajout des class
productColSm.classList.add('col-sm-4', 'espace', 'p-3');
productCard.classList.add('card');
productTitleDeux.classList.add('card-title', 'text-center', 'nom');
productImage.classList.add('image', 'container-fluid');
productImg.classList.add('img-fluid');
productCardBody.classList.add('card-body');
productDescrip.classList.add('mb-2', 'text-muted', 'text-uppercase', 'small');
productPrice.classList.add('mb-3', 'strong');
productlinkProduct.classList.add('img-fluid');
productButton.classList.add('btn', 'btn-primary', 'btn-sm', 'mr-1', 'mb-2', 'detail', 'm-1');
productButtonDeux.classList.add('btn', 'btn-secondary', 'btn-sm', 'mr-1', 'mb-2', 'm-1');

// Ajout d'attribut
productButton.setAttribute('type', 'button');
productButtonDeux.setAttribute('id', 'button');

// Relier l'élément créé à un parent
row.appendChild(productColSm);
productColSm.appendChild(productCard);
productCard.appendChild(productTitleDeux);
productCard.appendChild(productImage);
productImage.appendChild(productLinkImg);
productLinkImg.appendChild(productImg);
productCard.appendChild(productCardBody);
productCardBody.appendChild(productlinkProduct);
productlinkProduct.appendChild(productTitleTrois);
productlinkProduct.appendChild(productDescrip);
productlinkProduct.appendChild(productPrice);
productCardBody.appendChild(productLinkButton);
productLinkButton.appendChild(productButton);
productCardBody.appendChild(productButtonDeux);

// Recuperation des données pour les mettre dans leur contenant via le dom
productTitleDeux.innerHTML = article.name;
productImg.src = article.imageUrl;
productDescrip.innerHTML = article.description;
//Diviser les prix
productPrice.innerHTML = article.price / 100 + ' €';
productButton.innerHTML = `Détails`;
productButtonDeux.innerHTML = `Ajouter au panier`;

//Ajout des liens menant aux cameras selectionnées, via les images et le bouton
productLinkButton.href = `./Pages/product.html?${article._id}`;
productLinkImg.href = `./Pages/product.html?${article._id}`;

}






  