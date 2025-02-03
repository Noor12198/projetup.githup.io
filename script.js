function calcul() {
    var taille = document.getElementById('taille').value;
    var poids =  document.getElementById('poids').value;

    var IMC = poids / taille ** 2;
    var commentaire = "";

    console.log(`Voici la taille : ${taille}`);
    console.log(`Voici le poids : ${poids}`);
    console.log(IMC);

    if (IMC < 18.5) {
        commentaire = "Insuffisance pondérale ";
    } else if (IMC >= 18.5 && IMC < 25) {
        commentaire = "Corpulence normale";
    } else if (IMC >= 25 && IMC < 30) {
        commentaire = "Surpoids";
    } else if (IMC >= 30 && IMC < 35) {
        commentaire = "Obésité modérée";
    } else if (IMC >= 35 && IMC < 40) {
        commentaire = "Obésité sévère";
    } else {
        commentaire = "Obésité morbide";
    }

    var section_résultat = document.getElementById('resultat');
    section_résultat.textContent = `Votre IMC est de ${IMC.toFixed(1)}. Classification ${commentaire}`;
}
