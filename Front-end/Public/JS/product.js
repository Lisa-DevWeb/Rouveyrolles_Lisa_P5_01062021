
allProducts() //Rappel de la fonction

//Initialisation des variables
const panier = [];
const article = [];

const requestId = window.location.search; //Renvoie un objet Location contenant des informations concernant l'URL actuelle du doc. La propriété search permet l'accès aux url avec les differents id(chaînes de caractères)
const thisId = requestId.slice(1); //Sans modifier le tableau, renvoie une nouvelle copie des éléments du tableau

//Récupération des données API
async function allProducts() { //En atttente de la function GetArticles - Seconde exécution

  //Await met en pause le code sur cette ligne, jusqu'à ce que la promesse se realise, puis retourne la valeur resultante
  const articles = await getArticles(); //En attente des objets de l'API

  for (let i = 0; i < articles.length; i++) { //Tant que la longueur du tableau article est supérieure à i alors

    article.push(articles[i]); //On push chaque article un par un dans le tableau
    displayProduct(articles[i], i); //Appel de la fonction avec les paramètres souhaités
  }
};

//Récupération du resultat de la requête avec fetch - Première execution
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

//Affichage de la fiche produit avec la fonction asynchrone - Création du HTML 
async function displayProduct (article, position) {
 
  const articles = await getArticles();

  console.log("Administration : Vous regardez la page du produit id_"+ article._id );

  try {

    // Si l'id de l'article est le même que celui dans l'url, alors ça affiche la page du produit selectionné
    if (article._id === thisId) {

    //Element parent
    const container = document.getElementById("container-produits");

    //Création des éléments de la liste
    let productContainer = document.createElement('div');
    let productDivImg = document.createElement('div');
    let productImage = document.createElement('img');
    let productColCinq = document.createElement('div');
    let productCardBody = document.createElement('div');
    let productFirstTitle = document.createElement('h1');
    let productPrice = document.createElement('p');
    let productSpan = document.createElement('span');
    let productDescription = document.createElement('p');

    //Div quantité
    let productQuantity = document.createElement('div');
    let productDivcontainer = document.createElement('div');
    let productTableFisrt = document.createElement('table');
    let productTbodyFirst = document.createElement('tbody');
    let productTrQte = document.createElement('tr');
    let productDiv = document.createElement('div');
    let productBtn = document.createElement('button');
    let productSpann = document.createElement('input');
    let productBtndeux = document.createElement('button');

    let productTable = document.createElement('table');
    let productTbody = document.createElement('tbody');
    let productTrDeux = document.createElement('tr');
    let productDivCol = document.createElement('div');
    let productTd = document.createElement('td');
    let productTdQte = document.createElement('div');
    let productBtnQte = document.createElement('button');
    let productBtnI = document.createElement('i');
    let productInput = document.createElement('input');
    let productBtndeuxQte = document.createElement('button');
    //Div selection
    let productSelect = document.createElement('select');
    //Bouton
    let productDivBtn = document.createElement('div');
    let productBtnDeux = document.createElement('button');
  
    //Ajout de class
    productContainer.classList.add('row', 'justify-content-center', 'align-items-center', 'container-fluid');
    productDivImg.classList.add('col-sm-4', 'prod');
    productImage.classList.add('img-fluid');
    productColCinq.classList.add('col-sm-5', 'card', 'espace', 'm-3');
    productCardBody.classList.add('card-body');
    productFirstTitle.classList.add('nom')
    productPrice.classList.add('blue', 'strong', 'big');
    productSpan.classList.add('mr-1');
    productDescription.classList.add('pt-1');
    //Quantité
    productQuantity.classList.add('col', 'quantite', 'container-fluid');
    productDivcontainer.classList.add('contain', 'col', 'row');
    productTableFisrt.classList.add('containe', 'row', 'd-flex', 'flex-row');
    productDiv.classList.add('d-flex', 'flex-nowrap', 'espace')
    productBtn.classList.add('btn', 'btn-secondary');
    productBtndeux.classList.add('btn', 'btn-secondary');
    productTable.classList.add('table', 'table-sm', 'table-borderless');
    productTbody.classList.add('qte', 'col', 'row');
    productTrDeux.classList.add('col', 'col-6');
    productDivCol.classList.add('col', 'row');
    productTdQte.classList.add('row', 'col');
    productBtnQte.classList.add('btn', 'btn-outline-secondary', 'col', 'col-2');
    productBtnI.classList.add('bi', 'bi-plus');
    productInput.classList.add('form-control', 'w-25');
    productBtndeuxQte.classList.add('btn', 'btn-outline-secondary', 'col', 'col-2');
    productSelect.classList.add('form-select');
    //Bouton
    productDivBtn.classList.add('col', 'option', 'col-6', 'color');
    productBtnDeux.classList.add('btn','btn-secondary', 'btn-md', 'mr-1', 'mb-2', 'espace');

    //Ajout d'attribut
    productImage.setAttribute('alt', 'Responsive image');
    productTd.setAttribute('data-th', "Quantity");
    productBtn.setAttribute('type', 'button');
    productBtn.setAttribute('id', 'btMoins');
    productSpann.setAttribute('id', 'quantity');
    productSpann.setAttribute('value', '1');
    productSpann.setAttribute('type', 'text');
    productBtndeux.setAttribute('type', 'button');
    productBtndeux.setAttribute('id', 'btPlus');
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

    //Relier les éléments à leur parent
    container.appendChild(productContainer);
    productContainer.appendChild(productDivImg);
    productDivImg.appendChild(productImage);
    productContainer.appendChild(productColCinq);
    productColCinq.appendChild(productCardBody);
    productCardBody.appendChild(productFirstTitle);
    productCardBody.appendChild(productPrice);
    productPrice.appendChild(productSpan);
    productCardBody.appendChild(productDescription);
    //Quantité
    productCardBody.appendChild(productQuantity);
    productQuantity.appendChild(productTable);
    productQuantity.appendChild(productDivcontainer);
    productDivcontainer.appendChild(productTableFisrt);
    productTableFisrt.appendChild(productTbodyFirst);
    productTbodyFirst.appendChild(productTrQte);
    productTbodyFirst.appendChild(productDiv);
    productDiv.appendChild(productBtn);
    productDiv.appendChild(productSpann);
    productDiv.appendChild(productBtndeux);
    productTable.appendChild(productTbody);
    productTbody.appendChild(productTrDeux);
    productTable.appendChild(productDivCol);
    //Bouton
    productDivCol.appendChild(productDivBtn);
    productQuantity.appendChild(productBtnDeux);
    productTdQte.appendChild(productBtnQte);
    productBtnQte.appendChild(productBtnI);
    productTdQte.appendChild(productInput);
    productTdQte.appendChild(productBtndeuxQte);
    
    //Sélection
    productDivBtn.appendChild(productSelect);

    //Récupération des données Api
    productFirstTitle.innerHTML = article.name;
    productImage.src = article.imageUrl;
    productDescription.innerHTML = article.description;
    productPrice.innerHTML = article.price / 100 + ' €'; //Diviser les prix
    productBtnDeux.innerHTML = `Ajouter au panier`;
    productTrQte.innerHTML = `Quantité:`;
    productBtn.innerHTML = `-`;
    productBtndeux.innerHTML = `+`;
    productTrDeux.innerHTML =  `Lentilles:`;

      //Tant qu'il y a des lentilles, les éléments se créent
      for(i = 0; i < article.lenses.length; i++) {
                  
        let option = document.createElement('option'); //Création de l'option
        let select = document.getElementById("select"); //Rechercher id de la sélection
        option.setAttribute('id','option'+i);  //Ajout id + élément du tableau
        select.appendChild(option);

        document.getElementById('option'+i).innerHTML = article.lenses[i];
      }

      //Compteur

          //Définir l'attribut désactivé par défaut sur le bouton moins
          document.getElementById('btMoins').setAttribute("disabled", "disabled");

          //Valeur pour incrémenter/décrémenter la valeur d'input
          var valueCount 

          //Bouton plus
          document.getElementById('btPlus').addEventListener('click', function () {

              //Obtention de la valeur input
              valueCount = document.getElementById('quantity').value;

              //Incrémenter de 1 la valeur input 
              valueCount++;

              //Réglage de la valeur incrémenté
              document.getElementById('quantity').value = valueCount;

              if (valueCount > 1) { //Si la valeur est inférieure à 1, le bouton Moins est désactivité
                document.getElementById('btMoins').removeAttribute("disabled");
                document.getElementById('btMoins').classList.remove("disabled");
              }

              sessionStorage.setItem('quantity', valueCount)
          })

          //Bouton moins
          document.getElementById('btMoins').addEventListener('click', function () {

            //Obtention de la valeur input
            valueCount = document.getElementById('quantity').value;

            //Décrémenter de 1 la valeur input
            valueCount--;

            //Réglage de la valeur décrémenté
            document.getElementById('quantity').value = valueCount;

            if (valueCount == 1) { //Si la valeur est égale à 1, le bouton moins est désactivé
              document.getElementById('btMoins').setAttribute("disabled", "disabled")
            }

            sessionStorage.setItem('quantity', valueCount)
        });

          //Lors du clic
          document.getElementById('butn').onclick = function() {

            ajoutPanier(article._id)  //Appel de la fonction ajoutPanier, en indiquant que le paramètre sera égal à l'id de l'article
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

      //Si le localSotage contient un article       
      if (localStorage.getItem('panier') != null) {
        this.panier = JSON.parse(localStorage.getItem("panier")) // On recupère le panier du localStorage qu'on va créer plus tard. Conversion de la chaîne Json en un objet JavaScript
      }

      //Si le localStorage est vide, on indique que le panier est un tableau
      else {
        this.panier = [];
      }

      for (let i = 0; i < this.panier.length; i++) //Tant que le panier contient des articles
      {
  
          //Si un élément existe déjà dans le panier alors
          if (this.panier[i] != null) { //Si le panier contient des articles

            if (this.panier[i]._id === id) { //Si l'id du produit ajouté au panier correspond à l'id de l'article choisi
        
            this.panier[i].quantite += Number(sessionStorage.getItem('quantity')) //Renvoie la valeur stockée

            this.panier[i].lentille.push(document.getElementById('select').value); //push la valeur de lentille

            localStorage.setItem('panier', JSON.stringify(this.panier)); //Ajout d'un élément à l'intérieur du stockage local et conversion de la valeur Javascript en chaîne JSON

            sessionStorage.removeItem('quantity')  

            return; //L'instruction return met fin à l'exécution d'une fonction et définit une valeur à renvoyer à la fonction appelante

            }

          }

      }

      //Sinon initialiser les variables quantité et lentilles
      var position = this.panier.push(article); //Position correspond à l'article ajouté au panier

        if (sessionStorage.getItem('quantity') == null ) { //Si la quantité est égale à null
          this.panier[position-1]['quantite'] = 1; //Création d'une nouvelle variable à l'intérieur de l'article (description, name, price + création d'une variable quantite),
        } 
        
        else {
          this.panier[position-1]['quantite'] = Number(sessionStorage.getItem('quantity')) //la variable quantite équivaut à 0
        }

        sessionStorage.removeItem('quantity') //Suppression du nombre de quantité dans le sessionStorage          

        this.panier[position-1]['lentille'] = [document.getElementById('select').value]; //Récupération de la valeur de la balise select

        localStorage.setItem('panier', JSON.stringify(this.panier));

    } //Fin try

    catch (error) {
      console.error(error);
      alert('Votre choix n\'a pas pu être enregistré, veuillez réessayer ultérieurement.');
    };

  } //Fin de la function ajoutPanier

}; //Fin fonction displayProduct




