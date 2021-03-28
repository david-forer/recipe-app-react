import React, {useEffect} from 'react';

const FoodRecipe = () => {
  // paste your APP_ID
  const APP_ID = 'ccde8e54';
  // paste your APP_KEY
  const APP_KEY = '15cb949a0024003a6a70e4fb48ef1656';

// url query is making a search for 'chicken' recipe
  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  // useEffect to make our API request
  useEffect(() => {
    getData();
  }, []);

  // created an async function to be able to fetch our data
  const getData = async (e) => {
    const response = await fetch(url);
    const result = await response.json();
    // console log the results we get from the api
    console.log(result);
  };

  return (
    <div>
      
      <form>
        <input type="text" placeholder="Search for recipes" />
        <button type="submit" className="focus:outline-none bg-gray-100 transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-gray-300 text-gray-600 px-6 py-2 text-xs ml-4">
          Search
        </button>
      </form>
    </div>
  );
};

export default FoodRecipe;