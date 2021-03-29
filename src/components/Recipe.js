import React from "react";

const Recipe = ({ label, calories, image, url, ingredients }) => {
  return (
    <div className="mt-12">
    {/* Remove class [ h-24 ] when adding a card block */}
    {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
          <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 ">
          <img src={image} alt={label} className="w-full mb-4" />
          <p>calories: {calories}</p>
            <ul className="p-4">
              {ingredients.map((ingredient) => (
                <li key={ingredient.text}>{ingredient.text}</li>
              ))}
            </ul>
            <a href={url} target="_blank" rel="noreferrer" className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out focus:outline-none hover:bg-gray-300 rounded text-indigo-700 px-2 py-1 text-md">
                  Get Recipe
            </a>
              </div>
   

</div>
  );
};

export default Recipe;
