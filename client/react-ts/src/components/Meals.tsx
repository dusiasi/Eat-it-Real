import { MealsT } from '../types';

type Props = {
  meal: MealsT;
  key: number;
};

// Meals: the smallest item of the components, the indivudual meal items
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
        <div className="image-crop">
          <img className="image" src={image} alt="recipe" />
        </div>
        <div className="mealInfo-wrapper">
          <div className="title">{title}</div>
          <div id="recipeInfo">
            Preparation time: {readyInMinutes}
            {/* <div>Servings: {servings}</div> */}
            <a className="recipeInfo" href={sourceUrl}>
              <button className="btnSource">Go to Recipe</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
