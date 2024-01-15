import React, { useEffect } from 'react';
import { useForkify } from '../hooks/useForkify';
import Ingredients from './Ingredients';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Spinner from './Spinner';
import { CiClock2 } from 'react-icons/ci';
import { LuUsers } from 'react-icons/lu';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import { CiBookmark } from 'react-icons/ci';
import { FaBookmark } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';

function RecipeDetail() {
  const { recipeDetail, handleAddBookmarked, isLoadingDetail, bookMarked } =
    useForkify();
  const {
    id,
    cooking_time: time,
    image_url: img,
    ingredients,
    servings,
    title,
    publisher,
    source_url: guide,
  } = recipeDetail || {};
  const [newServing, setNewServing] = useState(servings || 0);

  useEffect(() => {
    // Set the initial value for newServing when recipeDetail is available
    if (servings !== undefined) {
      setNewServing(servings);
    }
  }, [servings]);

  const exist = bookMarked.findIndex((book) => book.id === id);

  return (
    <>
      {isLoadingDetail && <Spinner />}
      {!recipeDetail && (
        <div className="mt-20 flex items-center justify-center bg-red-50/25">
          <h1>😉 Start by searching for a recipe or an ingredient.</h1>
        </div>
      )}
      {recipeDetail && (
        <div className="relative">
          <div className="relative h-[300px] from-amber-300/50 to-red-300/50 before:absolute before:left-0 before:top-0 before:h-full before:w-full	before:bg-gradient-to-br before:content-['']">
            <img
              className="h-full w-full object-cover"
              src={img}
              alt="recipeImg"
            />
          </div>
          <span className="absolute left-[50%] top-[285px] translate-x-[-50%] translate-y-[-50%] -skew-y-6 bg-gradient-to-br from-amber-300 to-red-300 px-6 py-6 text-3xl uppercase text-white">
            {title}
          </span>
          <div className="flex items-center justify-between bg-red-50/25 px-16 pb-12 pt-24">
            <div className="flex gap-8">
              <div className="flex items-center justify-between gap-4 uppercase">
                <CiClock2 className="text-2xl text-red-400" />
                <span className="font-bold">{time} </span>
                Minutes
              </div>
              <div className="flex items-center justify-between gap-4 uppercase">
                <LuUsers className="text-2xl text-red-400" />
                <span className="font-bold">{newServing}</span>
                servings{' '}
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      newServing > 1
                        ? setNewServing((newServing) => newServing - 1)
                        : null
                    }
                  >
                    <CiCircleMinus className="text-2xl text-red-400" />
                  </button>
                  <button
                    onClick={() =>
                      setNewServing((newServing) => newServing + 1)
                    }
                  >
                    <CiCirclePlus className="text-2xl text-red-400" />
                  </button>
                </div>
              </div>
            </div>
            <button
              className="rounded-full bg-gradient-to-br from-amber-300 to-red-300 p-3 text-2xl text-white transition-all duration-300 hover:scale-110"
              onClick={() => handleAddBookmarked(recipeDetail)}
            >
              {exist !== -1 ? <FaBookmark /> : <CiBookmark />}
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 bg-slate-100 px-8 py-16">
            <h6 className="text-xl uppercase text-red-400">
              recipe ingredients
            </h6>
            <div className="flex flex-wrap items-center justify-between">
              {ingredients?.map((ing, i) => (
                <Ingredients
                  key={i}
                  ing={ing}
                  servings={servings}
                  newServing={newServing}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 bg-red-50/25 p-10">
            <h6 className="text-xl uppercase text-red-400">HOW TO COOK IT</h6>
            <p className="max-w-[80%] text-center">
              This recipe was carefully designed and tested by{' '}
              <span className="font-bold text-slate-900">{publisher}</span>.
              Please check out directions at their website.
            </p>

            <Link
              className="flex w-[auto] items-center justify-center rounded-full bg-gradient-to-br	from-amber-300 to-red-300 px-5 py-3 uppercase text-white transition-all hover:scale-110"
              to={guide}
              target="_blank"
            >
              <span>Directions</span>{' '}
              <FaLongArrowAltRight className="ml-4 text-xl" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default RecipeDetail;
