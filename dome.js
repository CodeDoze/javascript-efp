// Exercices sur le DOM
// Créez un dossier avec deux fichiers: index.html (ci-dessous) et script.js. Ouvrez la page avec Live Server et gardez la console ouverte (F12).

// Tout le code s'exécute au chargement de la page: pas besoin d'événements (ce sera le chapitre suivant). Le script est chargé comme module, il s'exécute donc une fois le HTML entièrement lu (voir Intégration).

// Chaque exercice travaille dans sa propre <section>: ciblez vos sélections ('#ex1 .content p' plutôt que 'p'), et affichez le résultat demandé dans la div.result de la section, avec textContent.

// 1. Sélection
// Sélectionnez tous les paragraphes de #ex1 .content, puis affichez leur nombre dans la console
// Sélectionnez le paragraphe .special de #ex1 et affichez son texte
// Sélectionnez le premier paragraphe de #ex1 .content et affichez son texte
// Avec for...of, affichez le texte de chaque paragraphe de #ex1 .content
// Sélectionnez '#ex1 .missing' et affichez le résultat. Essayez ensuite de modifier son textContent: quelle erreur obtenez-vous ? Remplacez cette ligne par une condition qui affiche un message quand l'élément n'existe pas.
// La liste de paragraphes est-elle un tableau ? Vérifiez avec Array.isArray, puis essayez .map. Convertissez-la en tableau et créez avec map le tableau des textes des paragraphes.
// Affichez dans la .result de #ex1: 'Nombre de paragraphes: 3'




// 2. Texte
// Affichez dans la console le texte actuel de #change-me, en le gardant dans une variable
// Remplacez-le par 'Contenu modifié'
// Mettez le texte '<strong>Pas en gras</strong>' dans le paragraphe .code avec textContent. Le texte est-il en gras ? Combien d'éléments enfants contient le paragraphe ?
// Affichez dans la .result: 'Avant: Ce texte va être modifié. Après: Contenu modifié' (en utilisant vos variables, pas en recopiant le texte)





// 3. Attributs
// Affichez la valeur de l'attribut href du lien .docs-link
// Changez sa destination pour 'https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model' et son texte pour 'Documentation du DOM'
// Ajoutez-lui l'attribut target avec la valeur '_blank'
// Désactivez le bouton .send, puis vérifiez qu'il a bien l'attribut disabled
// Affichez dans la .result: 'Lien: <adresse du lien>, bouton désactivé: true'






// 4. Classes
// Ajoutez la classe highlight à la note .note, et retirez-lui la classe muted
// Basculez (toggle) la classe highlight sur chaque paragraphe .toggle-me. Lequel est surligné après coup ? Pourquoi ?
// Vérifiez avec contains l'état de chaque paragraphe .toggle-me
// Comptez les éléments qui ont la classe highlight dans #ex4 et affichez dans la .result: 'Paragraphes surlignés: 2'






// 5. Style et visibilité
// Donnez au paragraphe .box un fond lightblue, un padding de 10px et des coins arrondis de 5px
// Affichez le paragraphe .secret, actuellement masqué
// Masquez le paragraphe .obsolete, sans le supprimer
// Affichez dans la .result: 'Secret masqué: false, obsolète masqué: true', à partir des propriétés des éléments




// 6. Créer, insérer, supprimer
// Créez un li avec le texte 'Apprendre le DOM' et ajoutez-le à la fin de la liste .tasks
// Créez un li avec le texte 'Installer VS Code' et ajoutez-le au début de la liste
// Supprimez la tâche .obsolete-task
// Créez un paragraphe 'Liste mise à jour' et insérez-le juste après la liste (pas dedans)
// Affichez le texte de chaque tâche dans la console, puis dans la .result: 'Nombre de tâches: 4'





// 7. Navigation et dataset
// Sélectionnez l'élément .current de #ex7, puis naviguez uniquement à partir de lui (pas d'autre querySelector pour trouver les membres de l'équipe).

// Affichez la classe de son parent
// Affichez le texte de l'élément précédent et de l'élément suivant
// Affichez son rôle (attribut data-role) avec dataset
// Ajoutez à l'élément suivant un attribut data-status valant 'absent', avec dataset. Vérifiez dans l'inspecteur.
// Parcourez tous les membres de l'équipe (les enfants du parent) et affichez dans la console 'Alice (dev)', 'Bob (design)', etc.
// Comptez les membres dont le rôle est 'dev' et affichez dans la .result: 'Développeurs: 2'






// 8. Champs de formulaire
// Affichez la valeur actuelle du champ #username
// Remplacez-la par 'Alice': que voit-on dans la page ?
// Affichez le type (typeof) de la valeur du champ #quantity. Est-ce un nombre ?
// Avec un prix unitaire de 12 €, affichez dans la .result: 'Alice commande 3 article(s) pour 36 €', en lisant le nom et la quantité dans les champs




// 9. Liste de produits

// const products = [
// 	{ name: 'Clavier', price: 49, inStock: true },
// 	{ name: 'Souris', price: 25, inStock: false },
// 	{ name: 'Écran', price: 189, inStock: true },
// ];
// Pour chaque produit, créez un li avec le texte 'Clavier: 49 €' et ajoutez-le à la liste .products
// Stockez le prix de chaque produit dans un attribut data-price du li
// Ajoutez la classe out-of-stock aux produits qui ne sont pas en stock
// Récupérez tous les li de la liste, convertissez-les en tableau, et comptez avec filter ceux qui ont la classe out-of-stock
// Lisez le data-price du dernier li: de quel type est la valeur ?
// Affichez dans la .result: 'Produits en stock: 2 sur 3', calculé à partir du tableau products