// Exercices sur les conditions
// Travaillez dans le main.js du setup, ouvrez la page avec Live Server et gardez la console ouverte (F12).

// 1. if...else
// Créez une fonction checkAge qui prend un âge et retourne 'majeur' si l'âge est d'au moins 18 ans, 'mineur' sinon
// Appelez-la avec plusieurs âges et affichez les résultats

function CheckAge(age){
    if (age >= 18){
        return "major";
    }else {return "mineur";}
};

// 2. else if
// Créez une fonction getGrade qui prend une note entre 0 et 20 et retourne:
// 'A' si la note est d'au moins 16
// 'B' si la note est d'au moins 14
// 'C' si la note est d'au moins 12
// 'D' si la note est d'au moins 10
// 'E' sinon
// Voici une autre version. Appelez-la avec 18: que retourne-t-elle ? Pourquoi ?
function getGrade (note){
    if(note >= 16){
        return "A";
    }else if (note >= 14){
        return "B";
    }else if (note >= 12){
        return "C";
    }else if (note >= 10){
        return "D";
    }else {
        return "E";
    }
};
console.log(getGrade(8),getGrade(19), getGrade(13))

function getGradeWrong(score) {
	if (score >= 10) {
		return 'D';
	} else if (score >= 12) {
		return 'C';
	} else if (score >= 14) {
		return 'B';
	} else if (score >= 16) {
		return 'A';
	}

	return 'E';
}
console.log(getGradeWrong(18))






// 3. Conditions combinées
// Créez une fonction isLeapYear qui prend une année et retourne true si elle est bissextile:

// divisible par 4, mais pas par 100
// ou divisible par 400
// Testez avec 2024 (bissextile), 2023 (non), 1900 (non) et 2000 (bissextile).
function isLeapYear (année){
   return (année % 4 === 0) =  false;
};






// 4. Truthy ou falsy ?
// Avant d'exécuter, notez pour chacune de ces valeurs si le code affiche 'truthy' ou 'falsy': '0', 0, '', [], null, 'false'

// const value = '0'; // replace with each value

// if (value) {
// 	console.log('truthy');
// } else {
// 	console.log('falsy');
// }
// Vérifiez, et comparez avec vos prédictions
// Cette fonction a un bug: displayStock(0) affiche 'Quantité inconnue' alors que 0 est une quantité valide. Corrigez-la.

// function displayStock(quantity) {
// 	if (quantity) {
// 		console.log(`Quantité: ${quantity}`);
// 	} else {
// 		console.log('Quantité inconnue');
// 	}
// }








// 5. switch
// Créez une fonction getDayName qui prend un numéro de jour (1 à 7) et retourne le nom du jour en français, ou null si le numéro n'est pas valide
// Créez une fonction getSeason qui prend un mois (1 à 12) et retourne la saison correspondante, ou null si le mois n'est pas valide
// Exécutez ce code, puis retirez le break du cas 'orange': que se passe-t-il ? Pourquoi ?

// const light = 'orange';

// switch (light) {
// 	case 'green':
// 		console.log('Go');
// 		break;
// 	case 'orange':
// 		console.log('Slow down');
// 		break;
// 	case 'red':
// 		console.log('Stop');
// 		break;
// }








// 6. Une calculatrice
// Créez une fonction calculate qui prend deux nombres et une opération ('+', '-', '*', '/'), et retourne le résultat. Pour une opération inconnue, elle retourne null.






// 7. if ou ternaire ?
// Créez une fonction getDiscount qui prend un montant et retourne une réduction de 10 % si le montant dépasse 100, 0 sinon. Utilisez un ternaire.
// Créez une fonction getStatus qui prend un code HTTP et retourne:
// 'success' de 200 à 299
// 'redirect' de 300 à 399
// 'error' de 400 à 599
// 'unknown' sinon
// Pourquoi un ternaire n'est-il pas une bonne idée pour getStatus ?





// 8. Sortir tôt
// Réécrivez cette fonction sans if imbriqués, en utilisant des return anticipés:


// function canRent(age, hasLicense) {
// 	if (age >= 18) {
// 		if (hasLicense) {
// 			return 'Location possible';
// 		} else {
// 			return 'Permis requis';
// 		}
// 	} else {
// 		return 'Trop jeune';
// 	}
// }