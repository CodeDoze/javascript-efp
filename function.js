
// 1. Déclarer et appeler
function greet (name){
    return "Hello, "+ name + "!"
};

function calculateArea (width,height){
    return width * height
};

function isEven(number){
    if (number % 2 === 0){return true;}
    return false;
};
console.log(greet("Anthony")); 
console.log (calculateArea(10,5));
console.log (isEven(15));


// 2. return ou console.log ?
function getPrice(quantity) {
	return(quantity * 2.5);
}

const price = getPrice(4);
console.log(`Total: ${price} €`);
// 10
// Total: undefined €
// le getPrice (4) execute le console.log pas un return
// la fonction n'a pas de return:donc  elle renvoie undefined 
// il faut changer le console.log par un return


// 3. Paramètres et valeurs par défaut
function createUser (name,age,isActive = true){
return {name , age, isActive};
};
