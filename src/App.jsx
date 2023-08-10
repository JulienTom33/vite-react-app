import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Menpage from './components/menpage';
import Womenpage from './components/womenpage';
import Article from './components/article'

const App = () => {
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
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/men" element={<Menpage />} />
        <Route path="/women" element={<Womenpage />} />
        {/* Pass articlesData as a prop to Article component */}
        <Route path="/article/:id" element={<Article articlesData={articlesData} />} />
      </Routes>
    </Router>
  );
};
export default App;
