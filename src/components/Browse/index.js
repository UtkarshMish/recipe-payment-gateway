import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";
import RecipeCard from "../common/RecipeCard";
import getRecipe from "../../utils/getRecipe"
const Browse = () =>
{

  const [isLoading, setIsLoading] = useState(true);
  const [recipeDetails, setRecipeDetails] = useState(null);
  useEffect(() =>
  {
    if (isLoading) {
      getRecipe().then(recipes =>
      {

        setRecipeDetails(recipes);
        setIsLoading(false);
      });
    }
  }, [isLoading]);

  if (isLoading) return <Loader />;
  return (
    <>
      <div className="heading"><h2 className="main-heading">Browse Recipe</h2></div>
      <div className="recipe__row">
        {recipeDetails.map(recipes => (
          <RecipeCard key={recipes["id"]} recipe={recipes} />
        ))}
      </div>
    </>
  );
};

export default Browse;
