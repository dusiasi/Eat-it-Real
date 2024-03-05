import Meals from './Meals';
import { MealData, MealPlan } from '../types';
import moment from 'moment';

type Props = {
  mealData: MealData;
  setMealPlan: React.Dispatch<React.SetStateAction<Array<MealPlan>>>;
  mealPlan: MealPlan[];
};

// MEALLIST:the list when we get the data-mealData- either from the db or the api, where we loop over and render the meals

// TODOS:
//1. do the week plan later!!!! doesnt work with this one!!!important-if you dont manage-delete the weekly option
//2.type error by _id below !!!! check with Felipe

export default function MealList({ mealData }: Props) {
  const nutrients = mealData.nutrients;
  const meals = mealData.meals;
  const created_at = mealData.created_at;

  // not sure about date, if i want to display it or not
  const formattedDate = moment(created_at).format('MMMM Do, YYYY');

  return (
    <>
      <div className="containerMealList">
        <div className="wrapper">
          <section className="nutrients">
            <h1>Nutrients</h1>
            <ul>
              <li>Calories:{nutrients.calories}</li>
              <li>Protein:{nutrients.protein}</li>
              <li>Fat:{nutrients.fat}</li>
              <li>Carbohydrates:{nutrients.carbohydrates}</li>
            </ul>
          </section>
          {/* <div className="dateTime">Created at:{formattedDate}</div> */}
        </div>
        <section className="mealList">
          {meals.map((meal, i) => (
            <Meals key={i} meal={meal} />
          ))}
        </section>
      </div>
    </>
  );
}
