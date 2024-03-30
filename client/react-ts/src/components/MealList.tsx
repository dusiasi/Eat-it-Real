import Meals from './Meals';
import { MealData, MealPlan } from '../types';

type Props = {
  mealData: MealData;
  setMealPlan: React.Dispatch<React.SetStateAction<Array<MealPlan>>>;
  mealPlan: MealPlan[];
};

export default function MealList({ mealData }: Props) {
  const nutrients = mealData.nutrients;
  const meals = mealData.meals;

  return (
    <>
      <div className="containerMealList">
        <section className="mealList">
          {meals.map((meal, i) => (
            <Meals key={i} meal={meal} />
          ))}
        </section>
        <div className="nutrients">
          <h3>Nutrients:</h3>
          <p>Calories:{nutrients.calories}</p>
          <p>Protein:{nutrients.protein}</p>
          <p>Fat:{nutrients.fat}</p>
          <p>Carbohydrates:{nutrients.carbohydrates}</p>
        </div>
      </div>
    </>
  );
}
