// ConfirmationCo()

// const order = 'http://localhost:3000/api/cameras/order';
// //Initialisation des tableaux
// const article = [];
// const panier = [];

// //Recuperation des données API


// //Recupération du localStorage 
// function ConfirmationCo() {

//     let panier = []; //Initialisation du panier

//     //Si le localStorage du panier possède un élément, on récupère le panier dans le localStaorage s'il existe
//     if (localStorage.getItem("panier")) {
//         panier = JSON.parse(localStorage.getItem("panier"));
//     }

//     console.log(panier);

//     //Si le panier est vide

// if (panier.length >= 1) {

//         localStorage.getItem('panier', JSON.stringify(panier)); //Ajout de l'element à l'intérieur du stockage local et conversion de la valeur Javascript en chaîne JSON

//         for (i=0; i < panier.length; i++) { //Tant que panier est supérieur à i



//     // const panier = [];

// //   let panier = Object.keys(localStorage);

//     // const order = sessionStorage.getItem('order');
//     // console.log(`order : ${order}`);

//     const panier = sessionStorage.getItem("order", "orderId");
    
//     // products = JSON.parse(sessionStorage.getItem('products'));
//     const orderId = panier;

//     // const panier = localStorage.getItem('panier');
//     console.log(`contact : ${panier}`);


//     const containerConfir = document.getElementById('Commande');//Parent

// // for (i=0; i < panier.length; i++) {

//     // let recapCommande = JSON.parse(localStorage.getItem(panier[i]))

//     //Création des éléments
//     let grandContainer = document.createElement('div');
//     let colCom = document.createElement('div');
//     let firstTitle = document.createElement('h1');
//     let divMssge = document.createElement('div');
//     let mssgeDiv = document.createElement('div');
//     let divMerci = document.createElement('div');
//     let secondTitle = document.createElement('h2');
//     let thirdTitle = document.createElement('h3');
//     let paraMsge = document.createElement('p');
//     let colQuatre = document.createElement('div');
//     let cardBody = document.createElement('div');
//     let paraRecap = document.createElement('p');
//     let paraNumber = document.createElement('p');
//     let idProduct = document.createElement('p');
//     let longTrait = document.createElement('hr');
//     let ulListe = document.createElement('ul');
//     let liListe = document.createElement('li');
//     let spanPrice =  document.createElement('span');
//     let liSecond = document.createElement('li');
//     let spanFrais = document.createElement('span');
//     let liThird = document.createElement('li');
//     let divStrong = document.createElement('div');
//     let strongBalise = document.createElement('strong');
//     let priceSpan = document.createElement('span');
//     let secondStrong = document.createElement('strong');

//     //Ajout class
//     grandContainer.classList.add('container-fluid', 'row');
//     colCom.classList.add('col', 'center', 'commande');
//     divMssge.classList.add('row', 'justify-content-center');
//     mssgeDiv.classList.add('col-4', 'pink');
//     divMerci.classList.add('merci');
//     colQuatre.classList.add('col-4', 'vert', 'card');
//     cardBody.classList.add('card-body');
//     paraRecap.classList.add('recap');
//     longTrait.classList.add('mb-2');
//     ulListe.classList.add('list-group', 'list-group-flush');
//     liListe.classList.add('list-group-item', 'd-flex','justify-content-between', 'align-items-center', 'border-0','px-0', 'pb-0');
//     liSecond.classList.add('list-group-item', 'd-flex','justify-content-between', 'align-items-center', 'px-0');
//     liThird.classList.add('list-group-item', 'd-flex','justify-content-between', 'align-items-center', 'border-0', 'px-0', 'mb-1');

//     //Ajout d'attribut
//     idProduct.setAttribute('id', 'idProduit');
//     spanPrice.setAttribute('id', 'price');
//     priceSpan.setAttribute('id', 'price_prix');

//     //Relier à leurs parents
//     containerConfir.appendChild(grandContainer);
//     grandContainer.appendChild(colCom);
//     grandContainer.appendChild(divMssge);
//     colCom.appendChild(firstTitle);
//     divMssge.appendChild(cardBody);
//     divMssge.appendChild(mssgeDiv);
//     divMssge.appendChild(colQuatre);
//     mssgeDiv.appendChild(divMerci);
//     divMerci.appendChild(secondTitle);
//     divMerci.appendChild(thirdTitle);
//     divMerci.appendChild(paraMsge);
//     colQuatre.appendChild(cardBody);
//     cardBody.appendChild(paraRecap);
//     cardBody.appendChild(paraNumber);
//     cardBody.appendChild(idProduct);
//     cardBody.appendChild(longTrait);
//     cardBody.appendChild(ulListe);
//     ulListe.appendChild(liListe);
//     liListe.appendChild(spanPrice);
//     ulListe.appendChild(liSecond);
//     liSecond.appendChild(spanFrais);
//     ulListe.appendChild(liThird);
//     liThird.appendChild(divStrong);
//     divStrong.appendChild(strongBalise);
//     liThird.appendChild(priceSpan);
//     priceSpan.appendChild(secondStrong);

//     //Texte
//     firstTitle.innerHTML = `Confirmation de commande`;
//     secondTitle.innerHTML = `Votre commande a bien été enregistrée !`;
//     thirdTitle.innerHTML = `Nous vous remercions de votre confiance.`;
//     paraMsge.innerHTML = `Nous vous tiendrons informé par e-mail lorsque les articles de votre commande auront été expédiés. <br> À très bientot ! `;
//     paraRecap.innerHTML = `Récapitulatif de votre commande`;
//     paraNumber.innerHTML = `Numéro de commande :`;
//     idProduct.innerHTML =  ` ${panier[i].lenses}`;
//     liListe.innerHTML = `Montant total`;
//     // spanPrice.innerHTML = `prixTotalid`;
//     liSecond.innerHTML =  `Frais de port`;
//     spanFrais.innerHTML =  `Gratuit`;
//     strongBalise.innerHTML = `Total TTC payé`;
//     // priceSpan.innerHTML = `Total TTC payéid`;

//     //Ajout de l'id de commande
//     // idProduct.innerHTML = `${panier[i]._id}`;
//     // idProduct.innerHTML = `recapCommande._id`;
//     // containerConfir.appendChild(id);

//     //Ajout prix


// // }
// }

// }}//Fin de la fonction
const panier = [];

let containerConfir = document.getElementById('Commande');

//Récupération sessionStorage
// let panier = object.keys(sessionStorage);

// for (i = 0 ; i < panier.length; i++); {
for(let i=0; i< sessionStorage.length; i++) {
       
    // let panier = sessionStorage.key(i);

//    const order = sessionStorage.getItem('order');
//     // console.log(`order : ${order}`);

    const panier = sessionStorage.getItem("order");
    // console.log(sessionStorage.length);1//Nombre de variable

    //Pour stocker des infos dans sessionStorage : let perso = { nom: ’wick’, prenom: ’john’ };
// localStorage.setItem("person", JSON.stringify(perso)
// );

//Pour recupérer un objet dans le localStorage : let p = JSON.parse(localStorage.getItem("person"));


//    let orderId =  sessionStorage.setItem("order", JSON.stringify(data));
    // let panier = document.getElementById('idProduit').value = JSON.parse(sessionStorage.getItem('products'));
    // const panier = sessionStorage.contact;
    // const panier = sessionStorage.getItem('order', 6)
    
    // products = JSON.parse(sessionStorage.getItem('products'));
    // const orderId = panier;

    // const panier = localStorage.getItem('panier');
    console.log(`contact : ${panier}`);

    // Création des éléments
    let grandContainer = document.createElement('div');
    let colCom = document.createElement('div');
    let firstTitle = document.createElement('h1');
    let divMssge = document.createElement('div');
    let mssgeDiv = document.createElement('div');
    let divMerci = document.createElement('div');
    let secondTitle = document.createElement('h2');
    let thirdTitle = document.createElement('h3');
    let paraMsge = document.createElement('p');
    let colQuatre = document.createElement('div');
    let cardBody = document.createElement('div');
    let paraRecap = document.createElement('p');
    let paraNumber = document.createElement('p');
    let idProduct = document.createElement('p');
    let longTrait = document.createElement('hr');
    let ulListe = document.createElement('ul');
    let liListe = document.createElement('li');
    let spanPrice =  document.createElement('span');
    let liSecond = document.createElement('li');
    let spanFrais = document.createElement('span');
    let liThird = document.createElement('li');
    let divStrong = document.createElement('div');
    let strongBalise = document.createElement('strong');
    let priceSpan = document.createElement('span');
    let secondStrong = document.createElement('strong');

    //Ajout class
    grandContainer.classList.add('container-fluid', 'row');
    colCom.classList.add('col', 'center', 'commande');
    divMssge.classList.add('row', 'justify-content-center');
    mssgeDiv.classList.add('col-4', 'pink');
    divMerci.classList.add('merci');
    colQuatre.classList.add('col-4', 'vert', 'card');
    cardBody.classList.add('card-body');
    paraRecap.classList.add('recap');
    longTrait.classList.add('mb-2');
    ulListe.classList.add('list-group', 'list-group-flush');
    liListe.classList.add('list-group-item', 'd-flex','justify-content-between', 'align-items-center', 'border-0','px-0', 'pb-0');
    liSecond.classList.add('list-group-item', 'd-flex','justify-content-between', 'align-items-center', 'px-0');
    liThird.classList.add('list-group-item', 'd-flex','justify-content-between', 'align-items-center', 'border-0', 'px-0', 'mb-1');

    //Ajout d'attribut
    idProduct.setAttribute('id', 'idProduit');
    spanPrice.setAttribute('id', 'price');
    priceSpan.setAttribute('id', 'price_prix');

    //Relier à leurs parents
    containerConfir.appendChild(grandContainer);
    grandContainer.appendChild(colCom);
    grandContainer.appendChild(divMssge);
    colCom.appendChild(firstTitle);
    divMssge.appendChild(cardBody);
    divMssge.appendChild(mssgeDiv);
    divMssge.appendChild(colQuatre);
    mssgeDiv.appendChild(divMerci);
    divMerci.appendChild(secondTitle);
    divMerci.appendChild(thirdTitle);
    divMerci.appendChild(paraMsge);
    colQuatre.appendChild(cardBody);
    cardBody.appendChild(paraRecap);
    cardBody.appendChild(paraNumber);
    cardBody.appendChild(idProduct);
    cardBody.appendChild(longTrait);
    cardBody.appendChild(ulListe);
    ulListe.appendChild(liListe);
    liListe.appendChild(spanPrice);
    ulListe.appendChild(liSecond);
    liSecond.appendChild(spanFrais);
    ulListe.appendChild(liThird);
    liThird.appendChild(divStrong);
    divStrong.appendChild(strongBalise);
    liThird.appendChild(priceSpan);
    priceSpan.appendChild(secondStrong);

    //Texte
    firstTitle.innerHTML = `Confirmation de commande`;
    secondTitle.innerHTML = `Votre commande a bien été enregistrée !`;
    thirdTitle.innerHTML = `Nous vous remercions de votre confiance.`;
    paraMsge.innerHTML = `Nous vous tiendrons informé par e-mail lorsque les articles de votre commande auront été expédiés. <br> À très bientot ! `;
    paraRecap.innerHTML = `Récapitulatif de votre commande`;
    paraNumber.innerHTML = `Numéro de commande :`;
    idProduct.innerHTML =  `${panier}`;
    liListe.innerHTML = `Montant total`;
    // spanPrice.innerHTML = `prixTotalid`;
    liSecond.innerHTML =  `Frais de port`;
    spanFrais.innerHTML =  `Gratuit`;
    strongBalise.innerHTML = `Total TTC payé`;
    // priceSpan.innerHTML = `Total TTC payéid`;

    //Ajout de l'id de commande
    // idProduct.innerHTML = `${panier[i]._id}`;
    // idProduct.innerHTML = `recapCommande._id`;
    // containerConfir.appendChild(id);



}//Fin for

//Pour itérer sur le localStorage
// for (let i = 0; i < sessionStorage.length; i++){
//     let clef = localStorage.key(i);
//     let valeur = localStorage.getItem(clef);
//     console.log(clef, valeur);
//     };


    