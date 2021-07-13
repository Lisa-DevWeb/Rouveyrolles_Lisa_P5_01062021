
//Initialisation des variables
allProducts() //Rappel de la fonction

const panier = [];
const article = [];

const requestId = window.location.search; //Renvoie un objet Location contenant des informations concernant l'URL actuelle du doc. La propriété search permet l'acces aux url avec les differents id(chaînes de caractères)
const thisId = requestId.slice(1);//Sans modifier le tableau, renvoie une nouvelle copie des éléments du tableau
console.log(thisId);

//--------------------------------------------------------------

//Recuperation des données API

//En atttente de la function GetArticles - Seconde execution

async function allProducts() {

  //Await met en pause le code sur cette ligne jusqu'à ce que la promesse se realise, puis retourne la valeur resultante.
  const articles = await getArticles(); //En attente des objets de l'API

  for (let i = 0; i < articles.length; i++) { //Tant que la longueur du tableau article est supérieure à i alors

    article.push(articles[i]); //On push chaque article un par un dans le tableau
    displayProduct(articles[i], i); //Appel d ela fonction avec les paramètres souaités
    console.log(article);
  }
}

// Recuperation du resultat de la requête avec fetch - Premiere execution
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
    alert('Le serveur ne répond pas, veuillez réessayer ultérieurement.')
  })
};

//------------------------------------------------------------------
//Affichage de la fiche produit avec la fonction asynchrone - Creation du HTML 

async function displayProduct (article, position) {
 
  const articles = await getArticles();

  console.log("Administration : Vous regardez la page du produit id_"+ article._id );

  try {
    // Si l'id de l'article et le même que celui dans l'url alors ça affiche la page du produit selectionné
    if (article._id === thisId) {

    //Element parent
    const container = document.getElementById("container-produits");

    //Creation des Elements enfants de container, liste des produits
    let productList = document.createElement('div');
    productList.setAttribute("class", "list-product");

    //Relier l'élément à son parent
    container.appendChild(productList);

      //Creation des éléments de la liste
      let productContainer = document.createElement('div');
      let productDivImg = document.createElement('div');
      let productImage = document.createElement('img');
      let productColCinq = document.createElement('div');
      let productCardBody = document.createElement('div');
      let productFirstTitle = document.createElement('h1');
      let productPrice = document.createElement('p');
      let productSpan = document.createElement('span');
      let productDescription = document.createElement('p');

       //Div quantite
       let productQuantity = document.createElement('div');
       let productTable = document.createElement('table');
       let productTbody = document.createElement('tbody');
       let productTrUn = document.createElement('tr');
       let productTrDeux = document.createElement('tr');
       let productDivCol = document.createElement('div');
       let productTd = document.createElement('td');
       let productQte = document.createElement('td');
       let productTdQte = document.createElement('div');
       let productBtnQte = document.createElement('button');
       let productBtnI = document.createElement('i');
       let productInput = document.createElement('input');
       let productBtndeuxQte = document.createElement('button');
       let productBtnIdeux = document.createElement('i');
      //Div selection
       let productSelect = document.createElement('select');
      //Bouton
      let productDivBtn = document.createElement('div');
      let productBtnDeux = document.createElement('button');
      
      //Ajout de class
      productContainer.classList.add('row', 'justify-content-center', 'container-fluid');
      productDivImg.classList.add('col-sm-4', 'prod');
      productImage.classList.add('img-fluid');
      productColCinq.classList.add('col-sm-5', 'card', 'm-3');
      productCardBody.classList.add('card-body');
      productFirstTitle.classList.add('nom')
      productPrice.classList.add('blue', 'strong', 'big');
      productSpan.classList.add('mr-1');
      productDescription.classList.add('pt-1');
      //Div Quantite
      productQuantity.classList.add('col', 'quantite', 'container-fluid');
      productTable.classList.add('table', 'table-sm', 'table-borderless');
      productTbody.classList.add('qte', 'col', 'row');
      productTrUn.classList.add('col', 'col-6');
      productTrDeux.classList.add('col', 'col-6');
      productDivCol.classList.add('col', 'row');
      productQte.classList.add('col', 'col-6', 'color', 'qte', 'row');//Quantité
      productTdQte.classList.add('def-number-input', 'number-input', 'safari_only', 'row', 'col');
      productBtnQte.classList.add('btn', 'btn-outline-secondary', 'col', 'col-2');
      productBtnI.classList.add('bi', 'bi-plus');
      productBtnIdeux.classList.add('bi', 'bi-dash', 'col', 'col-2');
      productInput.classList.add('form-control', 'w-25');
      productBtndeuxQte.classList.add('btn', 'btn-outline-secondary', 'col', 'col-2');
      productSelect.classList.add('form-select');
      //Bouton
      productDivBtn.classList.add('col', 'option', 'col-6', 'color');//Option
      productBtnDeux.classList.add('btn','btn-secondary', 'btn-md', 'mr-1', 'mb-2');

      // Ajout d'attribut
      productImage.setAttribute('alt', 'Responsive image');
      productTd.setAttribute('data-th', "Quantity");
      productBtnDeux.setAttribute('type', 'submit');
      productBtnDeux.setAttribute('name', 'btn-envoyer');
      productBtnQte.setAttribute('type', 'button');
      productInput.setAttribute('min', '0');
      productInput.setAttribute('name', 'quantity');
      productInput.setAttribute('value', '1');
      productInput.setAttribute('type', 'number');
      productBtndeuxQte.setAttribute('type', 'button');
      productBtnDeux.setAttribute('id', 'butn');
      productSelect.setAttribute('id', 'select');

      // Relier les éléments à leur parent
      container.appendChild(productContainer);
      productContainer.appendChild(productDivImg);
      productDivImg.appendChild(productImage);
      productContainer.appendChild(productColCinq);
      productColCinq.appendChild(productCardBody);
      productCardBody.appendChild(productFirstTitle);
      productCardBody.appendChild(productPrice);
      productPrice.appendChild(productSpan);
      productCardBody.appendChild(productDescription);
      //Div Quantite
      productCardBody.appendChild(productQuantity);
      productQuantity.appendChild(productTable);
      productTable.appendChild(productTbody);
      productTbody.appendChild(productTrUn);
      productTbody.appendChild(productTrDeux);
      productTrUn.appendChild(productTd);
      productTable.appendChild(productDivCol);
      productDivCol.appendChild(productQte);      
      //Bouton
      productDivCol.appendChild(productDivBtn);
      productQuantity.appendChild(productBtnDeux);
      productQte.appendChild(productTdQte);
      productTdQte.appendChild(productBtnQte);
      productBtnQte.appendChild(productBtnI);
      productBtndeuxQte.appendChild(productBtnIdeux);
      productTdQte.appendChild(productInput);
      productTdQte.appendChild(productBtndeuxQte);
      
      //Selection
      productDivBtn.appendChild(productSelect);

      //Recuperation des données Api
      productFirstTitle.innerHTML = article.name;
      productImage.src = article.imageUrl;
      productDescription.innerHTML = article.description;

      //Diviser les prix
      productPrice.innerHTML = article.price / 100 + ' €';
      productBtnDeux.innerHTML = `Ajouter au panier`;
      productBtnI.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
    </svg> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>`;
    productBtnIdeux.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
  </svg> <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>`;

      //Texte
      productTrUn.innerHTML = `Quantité`;
      productTrDeux.innerHTML =  `Lentilles`;

      //Tant qu'il y a des lentilles, les éléments se creent

      for(i = 0; i < article.lenses.length; i++) {
                  
        let option = document.createElement('option'); //Creation de l'option
        let select = document.getElementById("select"); //Rechercher id de la selection
        option.setAttribute('id','option'+i);  //Ajout id + élément du tableau
        select.appendChild(option);

        document.getElementById('option'+i).innerHTML = article.lenses[i];

        console.log(article.lenses.length);//Nombre de lentilles/options
          
      }

      //Lors du clic
      document.getElementById('butn').onclick = function() {

        ajoutPanier(article._id)  // Appel de la fonction ajoutPanier en indiquant que le parametre sera égal à l'id de l'article
        alert('Article ajouté au panier');
      }

    
    } //Fin de la boucle if
  }

  catch (error) {
    console.error(error);
    alert('Le serveur ne répond pas, veuillez réessayer ultérieurement.');
  };
  

//Fonction ajout au panier, avec en paramètre l'id du produit

    function ajoutPanier(id) {

      try {

        console.log(id);

        //Si le localSotage contient un article
        
        if (localStorage.getItem('panier') != null) {
          this.panier = JSON.parse(localStorage.getItem("panier")) // On recupère le panier du localStorage qu'on va créer plus tard
        }

        //Si le localStorage est vide, on indique que le panier est un tableau
        else {
          this.panier = [];
        }

        for (let i = 0; i < this.panier.length; i++) //Tant que le panier contient des articles
        {
            //Si un element existe deja dans le panier alors
            if (this.panier[i] != null) { //Si le panier contient des articles

              if (this.panier[i]._id === id) { //Si l'id du produit ajouté au panier correspond à l'id de l'article choisi
              this.panier[i].quantite += 1; //On incrémente de 1 la quantité
              
              this.panier[i].lentille.push(document.getElementById('select').value);//push la valeur de lentille

              console.log('Panier: ', this.panier);

              localStorage.setItem('panier', JSON.stringify(this.panier)); //Ajout d'un element à l'intérieur du stockage local et conversion de la valeur Javascript en chaîne JSON

              return; //L'instruction return met fin à l'exécution d'une fonction et définit une valeur à renvoyer à la fonction appelante

              }

            }

        } //Fin de la boucle for

        //Sinon initialiser les variables quantité et lentilles
        var position = this.panier.push(article);//Position correspond à l'article ajouté au panier

        this.panier[position-1]['quantite'] = 1; //Creation d'une nouvelle variale à l'intérieur de l'article (description, name, price + creation d'une variable quantite), 

        this.panier[position-1]['lentille'] = [document.getElementById('select').value]; //Creation d'une nouvelle variable à l'interieur de l'article mais on recupère la valeur de la balise select

        console.log('Push : ',position-1);
        console.log('Panier : ', this.panier);
        localStorage.setItem('panier', JSON.stringify(this.panier));

      } //Fin try

      catch (error) {
        console.error(error);
        alert('Votre choix n\'a pas pu être rengistré, veuillez réessayer ultérieurement.');
      };

    } //Fin de la function

}; //Fin fonction displayProduct




