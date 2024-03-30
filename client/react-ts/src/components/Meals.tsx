import { MealsT } from '../types';

type Props = {
  meal: MealsT;
  key: number;
};

export default function Meals({ meal }: Props) {
  const { title, readyInMinutes, sourceUrl, image } = meal;

  return (
    <div className="mealItem">
      <div className="mealInfo">
        <div className="image-crop">
          <img className="image" src={image} alt="recipe" />
        </div>
        <div className="mealInfo-wrapper">
          <div className="title">{title}</div>
          <div id="recipeInfo">
            Preparation time: {readyInMinutes} mins
            <a className="recipeInfo" href={sourceUrl}>
              <button className="btnSource">Go to Recipe</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
