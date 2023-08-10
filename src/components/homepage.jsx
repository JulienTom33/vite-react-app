import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage = () => {
    const [articlesData, setArticlesData] = useState([]);

    useEffect(() => {
        fetch('src/service/data.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Erreur lors de la requête');
            }
            return response.json();
          })
          .then(data => setArticlesData(data))
          .catch(error => console.error('Erreur lors de la récupération des données', error));
      }, []);

  return (
    <div className="home-page">      
      <div>
      <h1>Liste des articles</h1>
      <ul>
        {articlesData.length > 0 ? (
          articlesData.map(article => (
            <li key={article.name}>
               <h2>
                  <Link to={`/article/${article.name}`}>{article.name}</Link>
                </h2>
              <p>Catégorie : {article.category}</p>
              <p>Marque : {article.brand}</p>
              <p>Prix : {article.price} €</p>
              {article.avis && (
                <div>
                  <p>Nombre d'étoiles : {article.avis.stars}</p>
                  <p>Nombre d'avis : {article.avis.nb}</p>
                </div>
              )}
            </li>
          ))
        ) : (
          <p>Chargement des articles...</p>
        )}
      </ul>
    </div>
    </div>
    );
  };

  export default HomePage