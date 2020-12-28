import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const APP_ID = '826fdf36';
  const APP_KEY = 'ee1e5c1e15df89e2112c782a65dcc120';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipe, setRecipe]=useState([]);
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    var response = await fetch(exampleReq);
    const data = await response.json();
    setRecipe(data.hits);
  };
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar"></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default App;
