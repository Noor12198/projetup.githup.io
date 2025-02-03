function calcul_de_dose() {
	var dose_prescrite = (document.getElementById('dose_prescrite').value); //prends la valeur de la dose prescrite entrée par l'utilisateur
	var dose_disponible = (document.getElementById('dose_disponible').value); //prends la valeur du volume entrée par l'utilisateur
	var volume = (document.getElementById('volume').value); //prends la valeur du volume entrée par l'utilisateur
	
	var resultat_dose = (dose_prescrite/dose_disponible)*volume; //calcul la dose
	
	if (isNaN(resultat_dose) || resultat_dose <= 0) {
		document.getElementById('resultat_dose').textContent = "Vérifiez vos chiffres ";
	} else {
		document.getElementById('resultat_dose').textContent = "La quantité à prendre est : " + resultat_dose.toFixed(2) + " ml.";
	}
	
	}
function convertir_unite() {
	var valeur_a_convertir = parseFloat(document.getElementById('valeur_convertir').value);
	var unite_source = document.getElementById('unite_source').value;
	var unite_cible = document.getElementById('unite_cible').value;
	var resultat_conversion;
	
		
		if (unite_source === "mg" && unite_cible === "g") {
			resultat_conversion = valeur_a_convertir / 1000; // Conversion mg en g
		} else if (unite_source === "g" && unite_cible === "mg") {
			resultat_conversion = valeur_a_convertir * 1000; // Conversion g en mg
		} else if (unite_source === "ml" && unite_cible === "cl") {
			resultat_conversion = valeur_a_convertir / 10; // Conversion ml en cl
		} else if (unite_source === "cl" && unite_cible === "ml") {
			resultat_conversion = valeur_a_convertir * 10; // Conversion cl en ml
		}
		
	
		document.getElementById('resultat_conversion').textContent = "Le résultat de la conversion est : " + resultat_conversion.toFixed(2);
	}
	