//Initialisation des tableaux
const panier = [];
const article = [];

addPanier() //Appel de la fonction

//Création et affichage des éléments sur la page panier
function addPanier(number) {

try {

    let panier = []; //Initialisation du panier

    //Si le localStorage du panier possède un élément, on récupère le panier dans le localStaorage s'il existe
    if (localStorage.getItem("panier")) {
        panier = JSON.parse(localStorage.getItem("panier"));
    }

    console.log(panier);

    //Si le panier est vide

    if (panier.length >= 1) {

        localStorage.getItem('panier', JSON.stringify(panier)); //Ajout de l'élément à l'intérieur du stockage local et conversion de la valeur Javascript en chaîne JSON

        for (i=0; i < panier.length; i++) { //Tant que panier est supérieur à i

            //Création des éléments
            const section = document.getElementById('sectpanier'); //Parent

            let containerPanier = document.createElement('div');
            let divRow = document.createElement('div');
            let divMenu = document.createElement('div');
            let divCol = document.createElement('div');
            let divCardBody = document.createElement('div');
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
            divColsm.classList.add('col', 'blue', 'col-sm-5');
            containerImg.classList.add('image', 'container-fluid', 'justify-content-center', 'row');
            divImg.classList.add('img-fluid');
            divRecap.classList.add('col', 'col-sm-5', 'titreh');
            divColRow.classList.add('col');
            paraPrix.classList.add('d-flex', 'flex-nowrap','blue', 'strong');
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
            
            //Nommer les balises
            paraLentille.innerHTML = `Lentille : `;
            iCone.innerHTML = ` Retirer le produit`;

            //Récupération des données API
            titleDeux.innerHTML = panier[i].name;
            divImg.src = panier[i].imageUrl;
            paraPrix.innerHTML = `Prix unitaire : ` + panier[i].price / 100 + ' €';
            paraQte.innerHTML = "Quantité(s) : " + panier[i].quantite;


            //Ajout de la lentille dans une variable length, qui a pour valeur l'article et la value selectionnés

            for (let j=0; j < panier[i].lentille.length; j++){

                paraLentille.append(panier[i].lentille[j] + ' ' + ' | ' ) ; 
            }

            //Bouton de supression
            divBtn.setAttribute('id', panier[i]._id);
            divBtn.setAttribute('onclick', 'remove("'+i+'")'); //Appel de la fonction remove() avec en paramètre sa position dans le tableau

            //Prix total
            let prixTotal = 0;

            JSON.parse(localStorage.getItem("panier")).forEach((panier)=>{
                prixTotal += panier.price * panier.quantite / 100;
               });

            sessionStorage.setItem('prixTotal', JSON.stringify(prixTotal));
             
            console.log(prixTotal)

            document.getElementById('price').innerHTML = prixTotal + ' €';
            document.getElementById('price_prix').innerHTML = prixTotal + ' €';
 
        } //Fin de la boucle for

    } //Fin de la boucle if

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
    
} //fin try

catch (error) {
    console.error(error);
    alert('Le serveur ne répond pas, veuillez réessayer ultérieurement.');
  };

} //Fin de la fonction addPanier

//fonction de suppression
function remove(position) {

    this.panier = JSON.parse(localStorage.getItem("panier")); //Récupération de l'élément dans le panier du LocalStorage

    this.panier.splice(position,1); // Suppression du paramètre position qui correspond à i, 1 élément à supprimer

    localStorage.setItem('panier', JSON.stringify(this.panier));// Réactualisation du panier sans l'élément supprimé

    window.location.reload();//Rechargement de la page adin d'actualiser le panier une fois l'élément supprimé

}

//Fonction de récupération de l'id des produits du panier
function idCart() {

    try {

        sessionStorage.removeItem('products');//Les données enregistrées dans la sessionStorage expirent a la fin de la session de la navigation actuelle. Suppression de la ressource avec le nom de clé correspondant du storage.
        this.panier = []; 

        //Si le localStorage du panier existe alors

                if (localStorage.getItem('panier')) { //Si le localStorage du panier possède un élément, on récupère le panier dans le localStaorage s'il existe
                    this.panier = JSON.parse(localStorage.getItem("panier"));  //Conversion du format JSON au JS. Utilisation de localStorage.getItem afin de récupérer l'élément(panier) du stockage local
                }

                //Si la sessionStorage products existe alors
                if (JSON.parse(sessionStorage.getItem('products'))) {
                    var products = JSON.parse(sessionStorage.getItem('products'))
                }

                else {
                    products = []; //Sinon on initialise le tableau
                }

                    //Récupération de l'id grâce à une boucle for
                    for (h = 0; h < this.panier.length; h++) {
                        
                        console.log(this.panier[h]._id)
                        var idProdu = this.panier[h]._id

                        //Si l'id existe alors on push

                        if (idProdu != null) {
                            products.push(idProdu)
                            sessionStorage.setItem('products', JSON.stringify(products))
                        }

                        //Sinon on initialise le tableau

                        else {
                            idProdu = [];
                            products.push(idProdu)
                            sessionStorage.setItem('products', JSON.stringify(products))
                        }
                    }
    }

    catch (error) {
        console.error(error);
        alert('Le serveur ne répond pas, veuillez réessayer ultérieurement.');
      };

};//Fin de la fonction IdCart

idCart() //Appel de la fonction

//Au clic sur le formulaire    
let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (error) {

    error.preventDefault()

    var panier = JSON.parse(localStorage.getItem("panier"));
    var erreur;

    //Regex
    let string = /[a-zA-Z]/;
    let number = /[0-9]/;
    let mail =  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/y;
    let specialCara = /[§!@#$%^&*(),.?":{}|<>]/;

    //Récupération de la value du formulaire
    var nom = document.getElementById('formNom').value;
    var prenom = document.getElementById('formPrenom').value;
    var email = document.getElementById('formMail').value;
    var adresse = document.getElementById('formAdresse').value;
    var ville = document.getElementById('formVille').value;

    //S'il y a une erreur avec ces conditions, annulation du comportement par défaut du bouton et afficahge du message de la var erreur

    if (number.test(ville) == true || specialCara.test(ville) ==true || mail.test(ville) == true || ville == ''){
        erreur = "* Veuillez renseigner une ville "
        error.preventDefault()
    }
    if (specialCara.test(adresse) == true && string.test(adresse) ==true || adresse == ""){
        erreur = "* Veuillez renseigner une adresse de livraison"
        error.preventDefault()
    }
    if (mail.test(email) == false){
        erreur = "* Votre adresse mail n'est pas valide.."
        error.preventDefault()
    }
    if (number.test(prenom) == true || specialCara.test(prenom) == true || prenom == ''){
        erreur = "* Veuillez renseigner votre prénom"
        error.preventDefault()
    }
    if(number.test(nom) == true || specialCara.test(nom) == true || nom == ''){
        erreur = "* Veuillez renseigner votre nom"
        error.preventDefault()
    }

    //Si la taille du panier est supérieure à 1, on annule le comportement par dédaut du bouton et on affiche le message de la var erreur
  
    if (panier.length < 1) {
        error.preventDefault()
        erreur= "* Veuillez ajouter un article dans votre panier.."
        document.getElementById('erreur').innerHTML = erreur;
    }

    if (erreur) {
        error.preventDefault()
        document.getElementById('erreur').innerHTML = erreur;
    } 
    
    else {

        // Sinon on crée un objet contact contenant les informations du client
        contact = {
        lastName : nom,
        firstName : prenom,
        address : adresse,
        city : ville,
        email : email
        };

        // On crée le sessionStorage du contact
        let getIt = JSON.parse(sessionStorage.getItem('contact'));
        getIt = [];
        alert('Formulaire envoyé !');
        console.log(contact);

        // Ajout de l'objet product dans le sessionStorage et push dans le tableau product
        sessionStorage.setItem('contact', JSON.stringify(contact));
        getIt.push(contact);

        // Création de la variable qui va récuperer l'id des produits du panier
        products = JSON.parse(sessionStorage.getItem('products'));
            
        // Via la methode fetch, on POST les données à l'API contenant le products (idProduit) et l'objet contact
        
        fetch("http://localhost:3000/api/cameras/order", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ contact, products }),
                })

                .then((response) => response.json())

                .then((data) => {
                    
                sessionStorage.setItem("order", JSON.stringify(data));
                document.location.href = "confirmation.html";
                })

                .catch((erreur) => console.log("erreur : " + erreur));
             }
      
}); //Fin de l'évènement

