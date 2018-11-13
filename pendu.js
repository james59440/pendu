var tableau = ["barbu", "chien","bonbon","crayon","clique","souris","clavier"];

var ordiselect = 0;

var nombreVie= 1;


function Aleatoire() {

    var hasard = Math.floor(Math.random() * tableau.length);

    ordiselect = tableau[hasard];
}

Aleatoire();

function reset2() {

    nombreVie= 0;
}

    var bon = 0;


function reset() {
    document.getElementById("textuelle").value = "";
}




document.getElementById("bouton").addEventListener("click", function () {
    
nombreVie++;

for (var i = 0; i< ordiselect.length; i++ ) {

    var text = document.getElementById("textuelle").value;

    console.log(text);
    console.log(ordiselect);

    if (text.length >= 2) {

        document.getElementById("reponsequest").innerHTML = "votre réponse contient trop de lettre";

    }

    else if (ordiselect.indexOf(text) == -1) {

        document.getElementById("reponsequest").innerHTML = "cette lettre n'est pas présente";

    }

    else {
        document.getElementById("reponsequest").innerHTML = " ";

    }


    if (text == ordiselect[i]) {

        document.getElementById("champs" + i).innerHTML = " " + ordiselect[i];
        bon++;
    }



}

    if (bon === ordiselect.length) {
        document.getElementById("reponsequest").innerHTML = "Félicitation";

        Aleatoire();

    }
    if (nombreVie > 10) {

        document.getElementById("reponsequest").innerHTML = "You Loose";

        Aleatoire();

        reset2();

    }
    reset();
});