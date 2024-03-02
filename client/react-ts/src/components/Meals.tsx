import { useEffect, useState } from 'react';
import { MealsT } from '../types';

type Props = {
  meal: MealsT;
};

export default function Meals({ meal }: Props) {
  const { id, title, readyInMinutes, servings, sourceUrl, image, summary } =
    meal;

  // summary.replace(/<[^>]*>/g, '');
  // add button save to my plan- which will then send it to the database where the user then can change to her plans and see her plans in another page,where she can delete, search favorites etc

  return (
    <div className="mealItem">
      <div className="mealInfo">
        <div className="title">{title}</div>
        <img className="image" src={image} alt="recipe" />
        <div className="wrapper">
          <div>readyInMinutes: {readyInMinutes}</div>
          <div>servings: {servings}</div>
        </div>

        {/* <div className="summary">
          recipeInfo: {summary.replace(/<[^>]*>/g, '')}{' '}
        </div> */}
        {/* external link to recipe information, check later if you have time to do it yourself by click which shows the summary and the ingredients of the each recipe, if you dont have time it stays like this */}
        <a className="recipeInfo" href={sourceUrl}>
          Go to Recipe
        </a>
      </div>
    </div>
  );
}
