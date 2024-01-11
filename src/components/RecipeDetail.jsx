import React, { useState } from 'react';
import { useForkify } from '../hooks/useForkify';
import Ingredients from './Ingredients';
import { Link } from 'react-router-dom';

function RecipeDetail() {
  const { recipeDetail, servings, handleAddBookmarked } = useForkify();
  const [newServing, setNewServing] = useState(servings);

  function handleIncrease() {
    setNewServing((newServing) => newServing + 1);
  }

  function handleDecrease() {
    if (newServing > 1) setNewServing((newServing) => newServing - 1);
  }
  if (!recipeDetail) {
    return (
      <div>
        <h1>😉 Start by searching for a recipe or an ingredient.</h1>
      </div>
    );
  }

  const {
    cooking_time: time,
    image_url: img,
    ingredients,
    title,
    source_url: guide,
  } = recipeDetail;

  return (
    <div>
      <div>
        <img src={img} alt="recipeImg" />
      </div>
      <span>{title} </span>
      <div>
        <span>{time} Minutes</span>
        <div>
          {newServing} servings <button onClick={handleDecrease}>-</button>
          <button onClick={handleIncrease}>+</button>
        </div>
        <button onClick={() => handleAddBookmarked(recipeDetail)}>
          BookMark
        </button>
      </div>
      <div>
        <h6>recipe ingredients</h6>
        <div className="flex flex-wrap items-center justify-between">
          {ingredients?.map((ing, i) => (
            <Ingredients key={i} ing={ing} />
          ))}
        </div>
        <div>
          <h6>HOW TO COOK IT</h6>
          <p>
            This recipe was carefully designed and tested by All Recipes. Please
            check out directions at their website.
          </p>

          <Link to={guide}>Directions</Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
