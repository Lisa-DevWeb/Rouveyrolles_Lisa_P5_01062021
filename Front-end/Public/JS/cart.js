//Initialisation des tableaux
const panier = [];
const article = [];
const lentilleTab = [];

addPanier() //Appel de la fonction

//Fonction création des éléments sur la page panier

function addPanier() {

try {
    let panier = [];

    //Si le local Stoage du panier possède un élément

    if (localStorage.getItem("panier")) {
        panier = JSON.parse(localStorage.getItem("panier"));
    }//Fin boucle if

    
}//fin try
catch (e) {console.log(e)};

}//Fin de la fonction addPanier
