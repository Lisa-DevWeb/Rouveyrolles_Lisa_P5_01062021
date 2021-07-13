//Initialisation des tableaux
const panier = [];
const article = [];

addPanier() //Appel de la fonction

//Fonction création des éléments sur la page panier

function addPanier() {

try {

    let panier = []; //Initialisation du panier

    //Si le localStorage du panier possède un élément, on récupère le panier dans le localStaorage s'il existe
    if (localStorage.getItem("panier")) {
        panier = JSON.parse(localStorage.getItem("panier"));
    }

    console.log(panier);

    //Si le panier est vide

    if (panier.length >= 1) {

        localStorage.getItem('panier', JSON.stringify(panier)); //Ajout de l'element à l'intérieur du stockage local et conversion de la valeur Javascript en chaîne JSON

        for (i=0; i < panier.length; i++) { //Tant que panier est supérieur à i

            //Creation des éléments
            const section = document.getElementById('sectpanier');//Parent

            let containerPanier = document.createElement('div');
            let divRow = document.createElement('div');
            let divMenu = document.createElement('div');
            let divCol = document.createElement('div');
            let divCardBody = document.createElement('div');
            // let titleCamera = document.createElement('h1');
            let divColsm = document.createElement('div');
            let containerImg = document.createElement('div');
            let divImg = document.createElement('img');
            let divRecap = document.createElement('div');
            let titleDeux = document.createElement('h2');
            let divColRow = document.createElement('div');
            let paraQte = document.createElement('p');
            let paraPrix = document.createElement('p');
            let paraLentille = document.createElement('p');
            let divBtn = document.createElement('button');
            let lienRemove = document.createElement('a');
            let iCone = document.createElement('i');
            let trait = document.createElement('hr');

            //Ajout class
            containerPanier.classList.add('container', 'container-fluid', 'color');
            divRow.classList.add('row');
            divCol.classList.add('col');
            divCardBody.classList.add('row', 'quatre', 'card-body');
            // titleCamera.classList.add('taille');
            divColsm.classList.add('col', 'blue', 'col-sm-5');
            containerImg.classList.add('image', 'container-fluid', 'justify-content-center', 'row');
            divImg.classList.add('img-fluid');
            divRecap.classList.add('col', 'col-sm-5', 'titreh');
            divColRow.classList.add('col', 'row');
            paraQte.classList.add('col-sm-6');
            paraPrix.classList.add('col-sm-6', 'd-flex', 'flex-row-reverse', 'blue', 'strong');
            divBtn.classList.add('btn', 'btn-secondary')
            lienRemove.classList.add('card-link-secondary', 'small', 'text-uppercase', 'mr-3');
            iCone.classList.add('fas', 'fa-trash-alt', 'mr-1', 'minuscule');
            trait.classList.add('mb-4', 'm-3');

            //Ajout d'attribut
            divRow.setAttribute('id', 'panier');
            divMenu.setAttribute('id', 'menu');
            divImg.setAttribute('id', 'image');
            divImg.setAttribute('alt', 'Responsive image');
            titleDeux.setAttribute('id', 'nom');
            paraPrix.setAttribute('id', 'prix');
            divBtn.setAttribute('type', 'submit');
            lienRemove.setAttribute('id', 'remove');
            lienRemove.setAttribute('type', 'button');

            //Relier les éléments à leur parent
            section.appendChild(containerPanier);
            containerPanier.appendChild(divRow);
            divRow.appendChild(divMenu);
            divMenu.appendChild(divCol);
            divCol.appendChild(divCardBody);
            // divCardBody.appendChild(titleCamera);
            divCardBody.appendChild(divColsm);
            divColsm.appendChild(containerImg);
            containerImg.appendChild(divImg);
            divCardBody.appendChild(divRecap);
            divRecap.appendChild(titleDeux);
            divRecap.appendChild(divColRow);
            divColRow.appendChild(paraQte);
            divColRow.appendChild(paraPrix);
            divColRow.appendChild(paraLentille);
            divRecap.appendChild(divBtn);
            divBtn.appendChild(lienRemove);
            lienRemove.appendChild(iCone);
            divCardBody.appendChild(trait);
            
            //Remplissage des balises
            // titleCamera.innerHTML = `Votre panier`;
            paraLentille.innerHTML = `Lentille : ` ;
            iCone.innerHTML = ` Retirer le produit`;

            //Recuperation des données Api
            titleDeux.innerHTML = panier[i].name;
            divImg.src = panier[i].imageUrl;
            paraPrix.innerHTML = panier[i].price / 100 + ' €';
            paraQte.innerHTML = "Quantité(s) : " + panier[i].quantite;

            //Ajout de la lentille dans une variable length, qui a pour valeur l'article et la value selectionnés

            for (let j=0; j < panier[i].lentille.length; j++){

                paraLentille.append(panier[i].lentille[j] + ' ' + ' | ' ) ; 
            }

            //Bouton de supression
            divBtn.setAttribute('id', panier[i]._id);
            divBtn.setAttribute('onclick', 'remove("'+i+'")');

            //Prix total
            let prixTotal = 0;
            JSON.parse(localStorage.getItem("panier")).forEach((panier)=>{
                prixTotal += panier.price * panier.quantite / 100;
               });

               document.getElementById('price').innerHTML = prixTotal + ' €';
               document.getElementById('price_prix').innerHTML = prixTotal + ' €';
 

        }//Fin de la boucle for

    }//Fin de la boucle if

    else {
            //Sinon afficher un message indiquant un panier vide
            console.log(panier)
            console.log('Le panier est vide')

            let firstSection = document.getElementById('title');
            let titleCamera = document.createElement('div');
            titleCamera.classList.add('titre', 'col', 'col-12', 'nom');

            firstSection.appendChild(titleCamera);
            titleCamera.innerHTML = `Votre panier est vide `;
    }
    
}//fin try

catch (error) {
    console.error(error);
    alert('Le serveur ne répond pas, veuillez réessayer ultérieurement.');
  };

}//Fin de la fonction addPanier

//fonction de suppression :

function remove(position) {

    this.panier = JSON.parse(localStorage.getItem("panier")); //Recuperation de l'élément dans le panier du LocalStorage

    this.panier.splice(position,1); // Suppression du parametre position qui correspond à i, 1 élément à supprimer

    localStorage.setItem('panier', JSON.stringify(this.panier));// Reactualisation du panier sans l'élément supprimé

    window.location.reload();//Recahrge de la page pour actualiser le panier une fois l'élément supprimé

}//Fin function remove

//Fonction de récupération de l'id des produits du panier :