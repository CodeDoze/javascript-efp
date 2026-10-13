// 1.Déclaration de variable 
let name = "Anthony";
console.log(name);

let age = 36;
console.log(age);

const PI = 3.14159;
console.log(PI);

let isAdult = age >= 18;
console.log(isAdult);

// 2.let ou const

let score = 0;
score = 10 ;
console.log(score);

const country = "Belgique";
// country = "France";
// TypeError: Assignment to constant variable.
//    

// 3.avant la déclaration
const city = "Bruxelles";
 console.log(city);
// Cannot access 'city' before initialization at Object
// undefined 
//  var  cest ancien a ne plus utiliser let  quand la variable change , const  tous le temps sinon 

// 4.les type
const user = {
    name: "Anthony",
    age: 36,
    isActive: true,
    hobbies: ["technologie", "sport", "jeux vidéo"],
    nickname: null,
};

// Prédictions (avant exécution) :
// name     -> "string"
// age      -> "number"
// isActive -> "boolean"
// hobbies  -> "object"  
// nickname -> "object"  

console.log(typeof user.name);
console.log(typeof user.age);
console.log(typeof user.isActive);
console.log(typeof user.hobbies);
console.log(typeof user.nickname);

// Surprises : hobbies et nickname affichent "object".
// Vérifier qu'hobbies est un tableau :
console.log(Array.isArray(user.hobbies)); // true
// Vérifier null : user.nickname === null
