import React, { useEffect } from 'react';
import { useForkify } from '../hooks/useForkify';
import Ingredients from './Ingredients';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Spinner from './Spinner';

function RecipeDetail() {
  const { recipeDetail, handleAddBookmarked, isLoadingDetail } = useForkify();
  const {
    cooking_time: time,
    image_url: img,
    ingredients,
    servings,
    title,
    source_url: guide,
  } = recipeDetail || {};
  const [newServing, setNewServing] = useState(servings || 0);

  useEffect(() => {
    // Set the initial value for newServing when recipeDetail is available
    if (servings !== undefined) {
      setNewServing(servings);
    }
  }, [servings]);
  if (isLoadingDetail) return <Spinner />;

  return (
    <>
      {!recipeDetail && (
        <div>
          <h1>😉 Start by searching for a recipe or an ingredient.</h1>
        </div>
      )}
      {recipeDetail && (
        <div>
          <div>
            <img src={img} alt="recipeImg" />
          </div>
          <span>{title} </span>
          <div>
            <span>{time} Minutes</span>
            <div>
              {newServing} servings{' '}
              <button
                onClick={() =>
                  newServing > 1
                    ? setNewServing((newServing) => newServing - 1)
                    : null
                }
              >
                -
              </button>
              <button
                onClick={() => setNewServing((newServing) => newServing + 1)}
              >
                +
              </button>
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
                This recipe was carefully designed and tested by All Recipes.
                Please check out directions at their website.
              </p>

              <Link to={guide}>Directions</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RecipeDetail;
