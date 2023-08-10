import React from 'react';
import { useParams } from 'react-router-dom';

const Article = ({ articlesData }) => { // Receive articlesData as a prop
  const { id } = useParams();
  
  const article = articlesData.find(article => article.name === id);

  if (!article) {
    return <p>Article non trouvé.</p>;
  }

  return (
    <div>
      <h1>Détails de l'article : {article.name}</h1>
      <div>
        {article.size && (
          <div>
            <h2>Informations de taille :</h2>
            <ul>
              {article.size.map((size, index) => (
                <li key={index}>{size}</li>
              ))}
            </ul>
          </div>
        )}
        {article.picture && (
          <div>
            <h2>Images associées :</h2>
            <div className="image-gallery">
              {Object.values(article.picture[0]).map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
