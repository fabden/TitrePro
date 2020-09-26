import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Je veux obtenir toute la logique nécessaire à la requête (de posts, de catégories)
//  dans un seul hook.

export default (url) => {
  // url -> l'adresse qui me renverra ce que je veux
  // Il me faut un state pour contenir mes résultats
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Je veux lancer ma requête avec axios
    axios.get(url)
      .then((response) => {
        setItems([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return [loading, items];
};
