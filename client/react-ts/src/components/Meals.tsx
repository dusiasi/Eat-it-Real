import { MealsT } from '../types';

type Props = {
  meal: MealsT;
};

// TODOS:
// 1.if there is time -the user clicks and go to the page of a recipe,not to external one-where there is the summary and ingredients etc-at the moment there is an external link
// 2.check if ypu want to use summary or not-at the moment no summary, it takes to much space
export default function Meals({ meal }: Props) {
  const { id, title, readyInMinutes, servings, sourceUrl, image, summary } =
    meal;

  // summary.replace(/<[^>]*>/g, '');

  return (
    <div className="mealItem">
      <div className="mealInfo">
        <div className="title">{title}</div>
        <img className="image" src={image} alt="recipe" />
        <div className="wrapper">
          <div>readyInMinutes: {readyInMinutes}</div>
          <div>servings: {servings}</div>
        </div>
        <a className="recipeInfo" href={sourceUrl}>
          Go to Recipe
        </a>
      </div>
    </div>
  );
}
