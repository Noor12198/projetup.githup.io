function calcul_de_surfaceBoyd() {																		
	
	var poidsS = document.getElementById('poidsS').value ;																					// prends la valeur du poids entrée par l'utilisateur
	var tailleS = document.getElementById('tailleS').value;																					// prends la valeur de la taille entrée par l'utilisateur	
	var surfaceBoyd = 0.0003207 * Math.pow(poidsS*1000, 0.7285 - 0.0188 * Math.log(poidsS)) * Math.pow(tailleS, 0.3);
	document.getElementById('surfaceBoyd').textContent="votre surface corporelle est de "+surfaceBoyd.toFixed(2) +" m².";					// calcule la surface corporelle grace a la formule de boyd
	
}  
function calcul_de_surface() {
	var poidsS = document.getElementById('poidsS').value;
	var tailleS = document.getElementById('tailleS').value;
	var surface = 0.007184 * Math.pow(tailleS, 0.725) * Math.pow(poidsS, 0.425);
	document.getElementById('surface').textContent="votre surface corporelle est de "+surface.toFixed(2) +" m².";
}