# Atelier-3



Exercice 1 :
Cet exercice en JavaScript montre un exemple de programmation fonctionnelle. Nous avons un tableau appelé numbers contenant des nombres. Ensuite, nous utilisons la méthode filter() pour sélectionner les nombres pairs, c'est-à-dire ceux qui sont divisibles par 2. Après cela, nous appliquons la méthode sort() pour trier ces nombres pairs par ordre croissant. Le résultat final est un tableau trié des nombres pairs, que nous affichons dans la console. Le code donné est un bon exemple de l'utilisation des méthodes fonctionnelles comme filter() et sort() en JavaScript pour manipuler des tableaux.


Exercice 2 :
Cet exercice en JavaScript utilise la méthode map() pour manipuler un tableau numbers. Dans ce code, on vérifie si un élément du tableau est égal à 1. Si c'est le cas, on le garde tel quel. Sinon, on multiplie cet élément par l'élément précédent du tableau, en utilisant l'index du tableau pour accéder à l'élément précédent. Le résultat est un nouveau tableau où chaque élément (sauf le premier) est multiplié par l'élément précédent. Cependant, ce code peut provoquer une erreur car, dans la ligne num * result[numbers.indexOf(num) - 1], result n'est pas encore défini au moment de l'itération, ce qui génère une erreur.



Exercice 3 :
Cet exercice en JavaScript montre l'utilisation de plusieurs méthodes pour manipuler une chaîne de texte. Le texte initial est d'abord divisé en lignes grâce à la méthode split(". "), ce qui crée un tableau de sous-chaînes séparées par un point suivi d'un espace. Ensuite, la méthode map() est utilisée pour transformer chaque ligne en majuscules. Enfin, avec la méthode filter(), seules les lignes contenant la lettre "I" sont conservées. Le résultat final est un tableau de lignes en majuscules qui contiennent la lettre "I".


Exercice 4 :
Cet exercice en JavaScript utilise la méthode Math.max() pour trouver la valeur maximale dans un tableau numbers. L'opérateur de décomposition (...) est utilisé pour passer les éléments du tableau comme arguments individuels à la fonction Math.max(). Cela permet de déterminer le plus grand nombre parmi les éléments du tableau. Le résultat est ensuite affiché dans la console.



Exercice 5 :
Cet exercice en JavaScript utilise la méthode reduce() pour calculer le prix total des produits après application d'une taxe de 25%. Le tableau products contient des objets représentant des produits, chacun ayant un nom et un prix. La méthode reduce() additionne les prix de chaque produit après avoir multiplié chaque prix par 1.25 (pour inclure la taxe de 25%). Le résultat est le prix total de tous les produits avec la taxe incluse, qui est ensuite affiché dans la console.




Exercice 6 :
Ce projet consiste en un système de gestion des produits en utilisant HTML, Tailwind CSS, Font Awesome et Chart.js pour l'affichage et l'interactivité. La page présente des informations détaillées sur les produits, telles que le nombre total de produits, leur prix total et le nombre de produits en faible stock. Il est possible de rechercher des produits, de filtrer par catégorie et de trier les résultats par prix, stock ou nom. Les produits sont affichés dans des tableaux dynamiques et des graphiques générés avec Chart.js permettent de visualiser la répartition des produits par catégorie, ainsi que les niveaux de stock et les prix.
Le code JavaScript gère l'ensemble des fonctionnalités dynamiques du site. Il permet de filtrer les produits en fonction des critères de recherche et des options sélectionnées, tout en offrant un tri ascendant ou descendant. Le tableau des produits et celui des produits en faible stock sont mis à jour en temps réel en fonction des filtres appliqués. Les graphiques de répartition par catégorie, des niveaux de stock et des prix sont actualisés en fonction des produits filtrés, offrant ainsi une vue d'ensemble claire et dynamique du système de gestion des produits.


