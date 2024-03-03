import Meals from './Meals';
import { MealData, MealPlan } from '../types';
import { deleteFromPlan } from '../APIService';

type Props = {
  mealData: MealData;
  setMealPlan: React.Dispatch<React.SetStateAction<Array<MealPlan>>>;
  mealPlan: MealPlan[];
};

// TODOS:
//1. do the week plan later!!!! doesnt work with this one!!!important-if you dont manage-delete the weekly option
//2.type error by _id below !!!! check with Felipe

// the list when we get the data-mealData- either from the db or the api, where we loop over and render the meals
export default function MealList({ mealData, setMealPlan }: Props) {
  console.log(mealData);
  const id = mealData._id;
  const nutrients = mealData.nutrients;
  const meals = mealData.meals;

  async function handleDelete() {
    try {
      await deleteFromPlan(id);

      setMealPlan((prevList) =>
        prevList.filter((el) => {
          return el._id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

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
        </div>
        <section className="mealList">
          {meals.map((meal, i) => (
            <Meals key={i} meal={meal} />
          ))}
          <button className="buttonDelete" onClick={handleDelete}>
            Delete from plan
          </button>
        </section>
      </div>
    </>
  );
}
