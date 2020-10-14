import React from "react";
import { Link } from "react-router-dom";
import { BsOctagonFill } from "react-icons/bs";
const RecipeCard = (props) => {
  const { recipe } = props;
  if (recipe == null || recipe.length === 0) {
    return null;
  }
  return (
    <div className="recipe__card">
      <div className="recipe__title">
        <h5 className="recipe__name">{recipe["name"]}</h5>
        {recipe["label"] && recipe["label"].length > 0 ? (
          <div className="recipe__label">
            <BsOctagonFill className="label__icon" />
            <p>{recipe["label"]}</p>
          </div>
        ) : null}
      </div>
      <div className="recipe__content">
        <div className="recipe__image">
          <img src={recipe["image"]} alt={recipe["name"]} />{" "}
        </div>
        <div className="recipe__category">
          <h5 className="recipe__price">
            Price: {parseFloat(recipe["price"]).toFixed(2) + "  ₹"}
          </h5>
        </div>
        <div className="description">
          <h4>Description:</h4>
          <p>{recipe["description"]}</p>
        </div>
      </div>
      <Link to={`/buyItem?id=${recipe["id"]}`} className="recipe__button ">
        Buy Recipe !
      </Link>
    </div>
  );
};

export default RecipeCard;
