function calculateur_perfusion() {

    var volumeA = document.getElementById('volumeA').value ;																					// prends la valeur du poids entrée par l'utilisateur
	var dureeP= document.getElementById('dureeP').value;	
    var calibreP= document.getElementById('calibreP').value ;

    var resultatPerf = (volumeA * calibreP) / dureeP ;
    document.getElementById('resultatPerf').textContent="le débit de perfusion sera de "+resultatPerf.toFixed(2) +" gtt/min.";
}