import Meals from './Meals';
import { MealData } from '../types';
import { MealsT } from '../types';
// import { addMyPlan, getMyPlan } from '../APIService';

type Props = {
  mealData: MealData;
};

// TODOS:
//1. do the week plan later!!!! doesnt work with this one
// 2.take the button addtomyplan from here and put it up on the container-so that it doesnt show on every list

// here we do the loop over the meallist and then pass it to meal component to display it there
export default function MealList({ mealData }: Props) {
  const nutrients = mealData.nutrients;
  const meals = mealData.meals;

  //POST TO DATABASE-ADD TO MY PLAN
  // so here i make a post request to the server, and add the meal to my plan
  // async function addToMyplan() {
  //   console.log('add the mealData to my plan');
  //   // do i need return or sth else?
  //   await addMyPlan(mealData);
  // }

  return (
    <>
      <div className="containerMealList">
        <div className="wrapper">
          {/* <button className="button" onClick={addToMyplan}>
            Add to my Plan
          </button> */}
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
        </section>
      </div>
    </>
  );
}
