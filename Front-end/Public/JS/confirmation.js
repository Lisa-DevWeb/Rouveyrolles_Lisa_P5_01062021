
confirmation()

function confirmation() {
const panier = [];

try {

let containerConfir = document.getElementById('Commande');

for (i = 0 ; i < panier.length; i++); {

    let panier = JSON.parse(sessionStorage.getItem('order'));

    let prixTotal = JSON.parse(sessionStorage.getItem('prixTotal'));
    console.log(panier)

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
    let divStronng = document.createElement('div');
    let strongBaalise = document.createElement('strong');
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
    liListe.appendChild(divStronng)
    divStronng.appendChild(strongBaalise);
    strongBaalise.appendChild(spanPrice);
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
    idProduct.innerHTML =  `${panier.orderId}`;
    liListe.innerHTML = `Montant total`;
    liSecond.innerHTML =  `Frais de port`;
    spanFrais.innerHTML =  `Gratuit`;
    strongBalise.innerHTML = `Total TTC payé`;
    priceSpan.innerHTML = prixTotal + ' €';
    spanPrice.innerHTML = prixTotal + ' €';

   console.log(prixTotal);

}

}//Fin try

catch (error) {
    console.error(error);
    alert('Le serveur ne répond pas, veuillez réessayer ultérieurement.');
  };

}


    