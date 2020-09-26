# Hooks

Les hooks sont des fonctions que l'on peut utiliser UNIQUEMENT dans des composants React de type **function**.

## useState

C'est le hook qui permet à notre composant d'obtenir un "état" au même titre que le state d'une class.

Il y a cependant quelques différences notables:

* J'appelle mon state, et la méthode pour le modifier COMME JE VEUX
* Dans un state de class c'est forcément this.state et this.setState
* Je peux avoir autant de states que je veux (avec les hooks)
* Dans une class, je n'en ai qu'un 
* La nature de mon state peut être ce que je veux (boolean, number, object, array etc.)
* Dans un state de class, c'est forcément un OBJET
* La méthode pour modifier mon state le remplace intégralement
* Dans une class, le setState prend un objet et ne remplace dans le state que les propriétés fournies

### Exemples

Si pour mon application j'ai besoin de gérer une liste d'articles

* A quoi ressemblerait le state que je vais créer 
* Si je veux rajouter un article dans mon state
  
```javascript
const [posts, setPosts] = useState([{titre: 'toto'}]);

// Pour ajouter un article
const newArticle = { titre: 'tata' };
// Je garde pour habitude de TOUJOURS partir sur un nouveau
// array (ou un nouvel objet) pour garder le principe d'immutabilité
// ICi: je redéfinis mon nouveau state par un nouveau tableau
// dans lequel je récupère tout le contenu de mon state original
// et j'y ajoute le nouvel article
setPosts([ ...posts, newArticle ])

```

Si pour mon application j'ai besoin de gérer un formulaire d'édition d'article
(un article avec un title, et une description)

* A quoi ressemblerait le state que je vais créer 
* Si je veux modifier le contenu de mon state à chaque touche tapée
  
```javascript
// Ici je crée un state pour gérer l'édition d'un article
const [newArticle, setNewArticle] = useState({ title: '', description: '' });
// Ici je définis une méthode "onChange" qui sera exécutée par mes inputs

// Un input pour le title qui "onChange" appelle handleInputChange
// Un inpout pour la description qui "onChange" appelle handleInputChange
// UNe fonction appelée par un écouteur d'évenement reçoit SYSTEMATIQUEMENT
// l'event. 

//Dans l'event, je peux accéder à evt.target.value, je peux aussi accéder à
// evt.target.name pour savoir qui a appelé ma fonction

<input type="text" name="title" onChange={handleInputChange}/> t
<input type="text" name="description" onChange={handleInputChange}/>

const handleInputChange = (evt) => {
  // J'ai un objet, article, dans lequel je veux remplacer
  // soit title, soit description, en fonction de l'input qui a déclenché ma fonction
  // Je peux savoir dans event.target.name si ce que je veux modifier est title ou description
  // user[propriétéAremplacer] = "tata"
  const articleAremplacer = {
    // Je veux récupérer tout ce que contenait mon article 
    ...newArticle,
    [evt.target.name]: evt.target.value
  };

  setNewArticle(articleAremplacer);

}

```

## useEffect

Le rôle de ce hook va être d'exécuter des choses à des moments de la vie de mon composant.


les didMount et didUpadte sont rassemblés dans cette syntaxe
La fonction reçue est exécutée à chaque render

```javascript
useEffect(() => {
  console.log('test')
})
```


Si je souhaite exécuter une fonction uniquement au premier render (équivalent didMount) je peux donner un tableau vide au hook en deuxième paramètre. Pourquoi un tableau vide ? Parce que ce tableau est examiné par React, pour n'exécuter à nouveau la fonction QUE SI une des variables qu'il contient à changé de valeur. Si pas de variable à l'intérieur -> pas de changement -> pas de nouvelle exécution.

```javascript
useEffect(() => {
  console.log('test');
  // Si je mets une ou des variables dans l'array ci dessous
  // et que la valeur de l'une des variables a changé depuis la dernière exécution
  // alors on exécute à nouveau mon code, sinon on ne le réexécute pas
}, [])
```

### Exemple de html reçu par l'api qui contient une faille XSS

"Lorem ipsum dolor sit amet, <em>consectetur adipisicing</em> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur <strong>sint occaecat cupidatat</strong> non proident, sunt in culpa qui officia deserunt mollit <em>anim id est</em> laborum. <img onload="javascript:(function(){window.location.href = 'https://oclock.io'})()" src="https://images.pexels.com/photos/1154775/pexels-photo-1154775.jpeg?auto=compress&cs=tinysrgb&h=200&w=133" alt=""> Ut enim ad minim veniam, quis nostrud exercitation ullamco <strong>laboris nisi</strong> ut aliquip ex ea commodo consequat."