# Challenge "Modélisation de base de données"

## Objectifs

- Produire le Modèle Conceptuel de Données du projet _Todolist_ avec MoCoDo
- Produire le dictionnaire de données du projet _Todolist_

## Etapes

### #1 Analyse des données & MCD

- si besoin, faire le schéma du MCD sur papier d'abord
- analyser le wireframe et la description du projet pour connaitre toutes les données nécessaires au projet
- s'il y a le moindre doute, demander au _Product Owner_ du projet des précisions (c'est son role)
  - bien sûr, pas de pigeon voyageur
  - mais plutôt un message privé sur slack

:warning: **Attention**  
Le MCD d'un projet ne représente pas votre vision subjective du projet  
Mais la **vision du client**

### #2 MCD avec MoCoDo

- aller sur le site http://mocodo.wingi.net/
- "coder" le MCD afin de générer un beau MCD correspondant à l'étape 1
- exporter et récupérer les fichiers **.mcd** ("code" source) et **.svg** (image du MCD)
- placer ces fichiers dans ce challenge

### #3 Dictionnaire de données

- s'inspirer du travail effectué en S05E03
- :warning: on va ajouter des contraintes techniques
  - le nom des tables est toujours au pluriel et en anglais
  - chaque table doit avoir les champs `created_at` et `updated_at`

## Bonus

<details><summary>Et bah oui ma bonne dame ! Il y a toujours un bonus, même pour la modélisation des données !</summary>

- créer la base de données MySQL grâce à l'interface PHPMyadmin
- créer dans cette base de données, les tables et les champs
- exporter le tout dans un fichier (qui pourra servir d'import SQL)

</details>