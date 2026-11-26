// Exercices sur les événements
// Créez un dossier avec un index.html contenant le template ci-dessous, et un script.js à côté. Ouvrez la page avec Live Server et gardez la console ouverte (F12).

// Le script est chargé avec type="module": il s'exécute une fois le HTML analysé, tous les éléments sont donc disponibles (voir Intégration).

// 1. Attacher des écouteurs
// Attachez un écouteur click sur #btn-1 en utilisant la propriété onclick
// Attachez un écouteur click sur #btn-2 en utilisant addEventListener
// Attachez un écouteur mouseover sur #btn-3
// Attachez un écouteur keydown sur #input-1, qui affiche aussi la touche pressée (event.key)
// Chaque handler affiche dans la console l'objet event reçu. Dépliez-le dans la console pour explorer ses propriétés.





// 2. L'objet event
// Attachez un écouteur click sur #btn-4, qui affiche dans la console:
// le type d'événement
// la position X et Y de la souris
// l'élément cible de l'événement
// Attachez un écouteur keyup sur #input-2, qui affiche dans la console:
// la touche relâchée
// la valeur actuelle du champ
// Attachez un écouteur submit au formulaire #form-1, qui:
// empêche le rechargement de la page
// affiche dans la console un objet { username, email } construit à partir de la valeur (value) des champs #input-3 et #input-4
// Que se passe-t-il si vous oubliez preventDefault() ?





// 3. Événements et DOM
// Attachez un écouteur click sur #btn-5 qui:
// crée un nouveau paragraphe
// lui donne le texte 'Nouveau paragraphe créé au clic'
// l'ajoute à la div #content-1
// Attachez un écouteur input au champ #input-5 qui recopie sa valeur dans le paragraphe #output-1, en temps réel
// Attachez un écouteur click au bouton #btn-6 qui:
// bascule la classe active de l'élément #toggle-1
// affiche dans la console si l'élément a la classe active
// Compteur de caractères: à chaque saisie dans #textarea-1, affichez le nombre de caractères dans #output-2, sous la forme '12 caractères' (la propriété length d'un texte donne son nombre de caractères)
// Remplacez input par change dans la question 4: quand le compteur se met-il à jour ? Revenez ensuite à input.





// 4. Un compteur
// Le compteur #output-3 commence à 0.

// #btn-8 (+) l'augmente de 1
// #btn-7 (−) le diminue de 1, sans jamais descendre sous 0
// #btn-9 le remet à 0
// Après chaque clic, le texte de #output-3 affiche la nouvelle valeur. Évitez de répéter ce code d'affichage dans les trois handlers.




// 5. Propagation
// La div #parent-1 contient les boutons #btn-10 et #btn-11.

// Attachez un écouteur click sur #parent-1 qui affiche dans la console l'id de event.target et l'id de event.currentTarget
// Attachez un écouteur click sur #btn-10 qui affiche 'Button 10'
// Avant de tester, notez ce qui s'affichera, et dans quel ordre, quand on clique sur #btn-10. Puis quand on clique dans la div, à côté des boutons. Vérifiez.
// Attachez un écouteur click sur #btn-11 qui affiche 'Button 11' et arrête la propagation. Cliquez dessus: quel message n'apparaît plus ?




// 6. Comportement par défaut
// Attachez un écouteur click sur le lien #link-1 qui empêche la navigation et affiche 'Navigation bloquée' dans #output-4.




// 7. Retirer un écouteur
// Le bouton #btn-12 ne fonctionne que 3 fois: à chaque clic, il affiche 'Click 1/3', 'Click 2/3', 'Click 3/3' dans la console. Au troisième clic, retirez l'écouteur avec removeEventListener et changez le texte du bouton en 'Plus de clics disponibles'
// Le bouton #btn-13 n'affiche 'Clicked once' qu'au premier clic. Utilisez une option de addEventListener plutôt que removeEventListener.




// 8. Délégation d'événements

// const fruits = ['Pomme', 'Banane', 'Cerise'];
// Affichez chaque fruit du tableau dans un <li> de la liste #list-1
// Avec un seul écouteur, attaché à #list-1: un clic sur un fruit bascule sa classe active
// #btn-14 ajoute un fruit 'Fruit 4', 'Fruit 5', ... au tableau et à la liste. Vérifiez que les nouveaux fruits réagissent aussi au clic, sans ajouter d'écouteur.