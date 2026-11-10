// Exercices sur les objets
// Travaillez dans le main.js du setup, ouvrez la page avec Live Server et gardez la console ouverte (F12).

// 1. Créer et lire
// Créez un objet book avec les propriétés title, author, year et available (booléen)
// Affichez le titre avec la notation point, puis l'auteur avec la notation crochets

// Déclarez const key = 'year'; et affichez l'année en utilisant key
// Affichez book.pages: que vaut une propriété qui n'existe pas ?

// TODO(human): créer book, puis les 4 affichages
const book = {
    title :"konfer",
    author: "Steve Lebleu" ,
    year : 2026,
    available : true 
};
const key = "year";
console.log(book.title)
console.log(book["author"])
console.log(book[key])
console.log(book.pages)
// undefined

// 2. Modifier, ajouter, supprimer
// Modifiez l'année de book
// Ajoutez une propriété pages
// Supprimez la propriété available
// Affichez book. Il est déclaré avec const: pourquoi peut-on quand même le modifier ?

book.year = 2015;
console.log(book.year)
book.pages = true;
console.log (book.pages)
delete book.available
console.log(book)
// on peut le modifier  car cest pas la variable const que lon modifier mais cest objets


// 3. Fonctions et objets
// Créez une fonction createUser qui prend un nom, un âge et un email, et retourne un objet utilisateur. Utilisez l'écriture raccourcie.
// Créez une fonction getUserInfo qui prend un utilisateur et retourne une phrase du type 'Alice, 30 ans, alice@mail.com'
function createUser(nom,age,email){
    return  { nom, age , email
    }
};
function getUserInfo(user)




// 4. Objets imbriqués
// Créez un objet user avec un nom et une propriété address contenant street, city et zip
// Affichez la ville
// Affichez user.contact.email: que se passe-t-il ?
// Corrigez pour afficher 'Pas d'email' quand le contact est absent (voir Opérateurs)



// 5. Parcourir un objet
// Avec for...in, affichez chaque propriété de book sous la forme 'title: Le Petit Prince'.



// 6. Référence et copie
// Avant d'exécuter, notez ce qu'affiche chaque ligne:

// const a = { x: 1 };
// const b = { x: 1 };
// const c = a;

// c.x = 5;

// console.log(a === b);
// console.log(a === c);
// console.log(a.x);
// Créez une fonction updateUser qui prend un utilisateur et un objet de modifications, et retourne un nouvel utilisateur mis à jour, sans modifier l'original. Vérifiez que l'original n'a pas changé.
// Appelez updateUser sur l'utilisateur de l'exercice 4 en changeant la ville: updateUser(user, { address: { city: 'Liège' } }). Qu'est devenue la rue ? Pourquoi ?
// Créez une copie profonde de user, modifiez la ville de la copie, et vérifiez que l'original n'a pas changé.




// 7. Méthodes
// Créez un objet bankAccount avec:

// une propriété balance initialisée à 0
// une méthode deposit(amount) qui ajoute le montant au solde
// une méthode withdraw(amount) qui retire le montant seulement si le solde est suffisant, et retourne true ou false selon que le retrait a eu lieu
// une méthode getBalance() qui retourne le solde
// Testez: déposez 100, retirez 30, puis tentez de retirer 200.









// 8. Méthodes de Object
// Avec l'objet book, affichez:

// la liste de ses clés
// la liste de ses valeurs
// la liste de ses paires clé / valeur
// true ou false selon que book possède une propriété isbn







// 9. Classes
// Créez une classe Car avec:
// un constructeur qui prend la marque, le modèle et l'année
// une méthode start() qui retourne 'Vroum vroum!'
// une méthode getAge(currentYear) qui retourne l'âge de la voiture
// Créez deux voitures et affichez leur âge
// Créez une classe ElectricCar qui hérite de Car, avec en plus un niveau de batterie (battery, de 0 à 100) et une méthode charge() qui le remet à 100











// 10. Bonus: un compte vraiment privé
// Pour aller plus loin.

// Réécrivez le compte de l'exercice 7 sous forme de classe BankAccount, avec un solde privé (#balance): on doit pouvoir le lire, mais pas le modifier directement depuis l'extérieur.