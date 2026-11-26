// 1. if...else
// Créez une fonction checkAge qui prend un âge et retourne 'majeur' si l'âge est d'au moins 18 ans, 'mineur' sinon
// Appelez-la avec plusieurs âges et affichez les résultats

function checkAge (age){
    if (age >= 18)
        return "majeur"
    else{
        return "mineur"
    }
} 
console.log(checkAge(20))






// 2. else if
// Créez une fonction getGrade qui prend une note entre 0 et 20 et retourne:
// 'A' si la note est d'au moins 16
// 'B' si la note est d'au moins 14
// 'C' si la note est d'au moins 12
// 'D' si la note est d'au moins 10
// 'E' sinon
function getGrade(note){
    if (note >= 16){
        return "A"
    }else if (note >= 14){
        return "B"
    }else if (note >= 12){
        return "C"
    }else if (note>=10){
        return "D"
    }else{
        return"E"
    }
};
console.log(getGrade(13))
// Voici une autre version. Appelez-la avec 18: que retourne-t-elle ? Pourquoi ?

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
    console.log (getGradeWrong(18))
     // la premiere conditon est vrai  donc sarrete, il ne teste pas les autres




// 3. Conditions combinées
// Créez une fonction isLeapYear qui prend une année et retourne true si elle est bissextile:
// divisible par 4, mais pas par 100
// ou divisible par 400
// Testez avec 2024 (bissextile), 2023 (non), 1900 (non) et 2000 (bissextile).

function isLeapYear(annee){
    if ((annee % 4 === 0 && annee % 100 !== 0 )||annee % 400 === 0 ){
        return true
    }
    return false;
};
console.log(isLeapYear(2024))
console.log(isLeapYear(2023))
console.log(isLeapYear(1900))
console.log(isLeapYear(2000))

// 4. Truthy ou falsy ?
// Avant d'exécuter, notez pour chacune de ces valeurs si le code affiche 'truthy' ou 'falsy': '0', 0, '', [], null, 'false'

const value = "false"; // replace with each value

if (value) {
	console.log('truthy');
} else {
	console.log('falsy');
}
// "0", [],"false"= truthy
// 0 , "",null,= falsy

// Vérifiez, et comparez avec vos prédictions
// Cette fonction a un bug: displayStock(0) affiche 'Quantité inconnue' alors que 0 est une quantité valide. Corrigez-la.

function displayStock(quantity) {
	if (quantity >=0 && quantity !== null && quantity !== undefined) {
        return `Quantité: ${quantity}`
		console.log(`Quantité: ${quantity}`);
	} else {
        return "Quantité inconnue"
		console.log('Quantité inconnue');
	}
}
console.log(displayStock(0))
console.log(displayStock(null))



// 5. switch
// Créez une fonction getDayName qui prend un numéro de jour (1 à 7) et retourne le nom du jour en français, ou null si le numéro n'est pas valide
// Créez une fonction getSeason qui prend un mois (1 à 12) et retourne la saison correspondante, ou null si le mois n'est pas valide

function getDayName(number){
    switch (number){
        case 1 : return "lundi";
        case 2 : return "mardi";
        case 3 : return "mercredi";
        case 4 : return "jeudi";
        case 5 : return "vendredi";
        case 6 : return "samedi";
        case 7 : return "dimanche";
        default: return null;   
    }
    
};console.log(getDayName(3))

function getSeason(numb){
    switch(numb){
        case 1 : return "Janvier";
        case 2 : return "Fevrier";
        case 3 : return "Mars";
        case 4 : return "Avril"
        case 5 : return "Mai"
        case 6 : return "Juin"
        case 7 : return "Juillet"
        case 8 : return "Aout"
        case 9 : return "septembre"
        case 10 : return "Octobre"
        case 11 : return "Novembre"
        case 12 : return "Decembre"
        default : return null
    }
};
console.log(getSeason(11))

// Exécutez ce code, puis retirez le break du cas 'orange': que se passe-t-il ? Pourquoi ?
const light = 'orange';

switch (light) {
	case 'green':
		console.log('Go');
		break;
	case 'orange':
		console.log('Slow down');
		// break;
	case 'red':
		console.log('Stop');
		break;
}
// Sans break, le switch exécute le cas 'orange' (Slow down), puis passe au cas 'red' (Stop), parce qu'il n'y a rien pour l'arrêter. Avec le break, seul Slow down s'affiche.


// 6. Une calculatrice
// Créez une fonction calculate qui prend deux nombres et une opération ('+', '-', '*', '/'), et retourne le résultat. Pour une opération inconnue, elle retourne null.

function calculate (n1,n2,operateur){
    switch(operateur){
        case "+" :return (n1+n2);
        case "-" :return (n1-n2);
        case "*":return(n1*n2);
        case "/":return(n1/n2);
        case "%":return(n1%n2);
        default: return null;
     }
};
console.log(calculate(9,3,"+"))

// 7. if ou ternaire ?
// Créez une fonction getDiscount qui prend un montant et retourne une réduction de 10 % si le montant dépasse 100, 0 sinon. Utilisez un ternaire.
// function getDiscount (montant){
//     if (montant > 100){
//         return montant * 0.1;
//     } else {
//         return 0
//     }
// };

function getDiscountTernaire(montant){
    return (montant>100?montant*0.1:0);
}

console.log(getDiscountTernaire(200))
console.log(getDiscountTernaire(50))
console.log(getDiscountTernaire(100))

// Créez une fonction getStatus qui prend un code HTTP et retourne:
// 'success' de 200 à 299
// 'redirect' de 300 à 399
// 'error' de 400 à 599
// 'unknown' sinon
function getStatus(http){
    if (http >= 200 && http <= 299){
        return "success";
    }else if(http >= 300 && http <= 399 ){
        return "redirect";
    }else if (http >= 400 && http <= 599){
        return "error"
    }else{
        return "unknown"
    }

};

console.log(getStatus(260))
console.log(getStatus(389))
console.log(getStatus(400))
// Pourquoi un ternaire n'est-il pas une bonne idée pour getStatus ?

// un ternaire cest quand il acondition a un vrai et un faux , sil yen a  plusieur le else if est plus simple a lire


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

function canRent (age,hasLicense){
    if (age < 18){
        return "Trop jeune";
    } if (hasLicense === false){
        return "Permis requis"
    }else{
        return "Location possible"
    }
       
};

