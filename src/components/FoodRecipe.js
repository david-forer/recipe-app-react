import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const FoodRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  // paste your APP_ID
  const APP_ID = "ccde8e54";
  // paste your APP_KEY
  const APP_KEY = "15cb949a0024003a6a70e4fb48ef1656";

  // url query is making a search for 'chicken' recipe
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // useEffect to make our API request
  useEffect(() => {
    getData();
  }, [query]);

  // created an async function to be able to fetch our data
  const getData = async (e) => {
    const response = await fetch(url);
    const result = await response.json();
    // console log the results we get from the api
    console.log(result);
    setRecipes(result.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    // empty the input field after making search
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search for recipes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 px-2 w-1/4 rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
        />
        <button
          type="submit"
          className="focus:outline-none bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-400 rounded border border-gray-800 text-gray-800 px-6 py-2 text-xs ml-4"
        >
          Search
        </button>
      </form>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {/* map over our array and pass our data from API*/}
          {recipes !== [] &&
            recipes.map((recipe) => (
              <Recipe
                key={recipe.recipe.url}
                label={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                url={recipe.recipe.url}
                ingredients={recipe.recipe.ingredients}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FoodRecipe;
