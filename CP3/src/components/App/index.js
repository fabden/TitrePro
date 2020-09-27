/* eslint-disable react/jsx-props-no-multi-spaces */
// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// == Import
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';
import PAGE404 from '../404';
import SinglePost from '../Posts/SinglePost';

import Spinner from '../Spinner';

import useAjax from '../../hooks/useAjax';

// import categories from '../../data/categories';
// import posts from '../../data/posts';
import './styles.scss';


// Créer une fonction qui recevra la liste de tous les posts
// ET une catégorie. Elle devra renvoyer un tableau de posts
// qui correspondent à la catégorie

// Utiliser cette fonction pour donner les bons posts à afficher
// au composant <Posts />

const filterPosts = (posts, category) => {
  // Si la catégorie que je reçoi sest "accueil"
  // JE veux renvoyer tous les posts
  if (category === 'Accueil') {
    return posts;
  }
  // Sinon, je veux renvoyer uniquement les posts
  // qui font parti de la catégorie
  return posts.filter((post) => post.category === category);
};

// == Composant
const App = () => {
  // Modifier notre hook pour qu'il ai un state loading qui lui est propre
  // Et que ce qu'il nous return ne soit plus juste le state de résultat
  // Mais plutôt un array de states ([ loading, state ])
  const [articlesLoading, articles] = useAjax('https://oclock-open-apis.now.sh/api/blog/posts');
  const [categoriesLoading, categories] = useAjax('https://oclock-open-apis.now.sh/api/blog/categories');
  // Utiliser le hook useEffect pour lancer l'appel à notre API
  // dés que le composant est monté, au lieu d'attendre le clic sur le boutton.

  return (
    <div className="app">
      <Header categories={categories} />
      {
        (articlesLoading || categoriesLoading) && <Spinner />
      }

      {
        (!articlesLoading && !categoriesLoading) && (
          <Switch>
            {
              categories.map((category) => (

                <Route
                  exact
                  key={category.label}
                  path={category.route} // Réagi à "/"
                  /*
                  component={NomDuComposant} -> Pratique mais ne permet pas de passer des props
                  */
                  render={() => (
                    <Posts
                      posts={filterPosts(articles, category.label)}
                      category={category.label}
                    />
                  )}
                /*
                  Render prend une fonction qui doit return ce qu'on veut afficher, on peut
                  donc passer des props
                */
                />
              ))
            }
            <Route
              path="/articles/:slug"
              render={(object) => {
                // Je récupère mon paramètre dans objet.match.params
                const { slug } = object.match.params;
                // Je dois trouver dans "articles" l'objet qui a le slug
                // que je recherche.
                // je peux donner l'article en tant que props à SinglePost
                // Etape 1, une variable pour contenir le bon article
                // Etpae 2, destrcturer la variable sur SinglePost pour qu'il reçoive les bons props
                // Etape 3, Si jamais pas d'article trouvé -> 404
                const singleArticle = articles.find((article) => article.slug === slug);

                if (!singleArticle) {
                  return <PAGE404 />;
                }
                return <SinglePost {...singleArticle} />;
              }}
            />
            <Redirect from="/jquery" to="/react" />
            <Route component={PAGE404} />
          </Switch>
        )
      }

      <Footer />
    </div>
  );
};
// == Export
export default App;
