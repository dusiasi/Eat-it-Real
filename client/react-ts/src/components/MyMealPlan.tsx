import { MealData, MealPlan } from '../types';
import { getMyPlan } from '../APIService';
import MealList from './MealList';
import * as React from 'react';
import { useEffect } from 'react';

type Props = {
  mealPlan: MealPlan[];
  setMealPlan: React.Dispatch<React.SetStateAction<Array<MealPlan>>>;
  mealData: MealData;
};

// todos:
// mealData is giving type error below-check with Felipe
// organisation of the page-do we want favorits, how to sort, how to organize this page like weekly plan or sth different,
//update?
// sort
// add date and plan-created
// add favorites-make a list of favorites
// add weekly plan
// styling!!!

// get the meal plan from the database
export default function MyMealPlan({ mealPlan, setMealPlan, mealData }: Props) {
  useEffect(() => {
    async function setData() {
      const result = await getMyPlan();

      // not sure of this
      const sortedList = [...result].sort((a, b) => {
        return Date.parse(b.created_at) - Date.parse(a.created_at);
      });
      setMealPlan(sortedList);
    }

    setData();
  }, []);

  console.log(mealPlan);

  return (
    <>
      <section className="mealPlanContainer">
        {mealPlan.map((el, i) => (
          <React.Fragment key={i}>
            <MealList mealData={el} setMealPlan={setMealPlan} />
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
