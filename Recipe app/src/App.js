import React, { useEffect, useState} from 'react';
import Recipe from './Recipe';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const APP_ID = "b9430405";
  const APP_KEY = "92f3dacc4889c056b8b09b8fa0fae2e0";

const [recipes, setRecipes] = useState([]);


useEffect(() => {
  getRecipes();
},[]);

const getRecipes = async() => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);

};
  return(
    <div className="App">
      <form className = "search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe title={recipe.recipe} calories={recipe.recipe.calories}/>
      ))}
    </div>
  );
};

export default App;
