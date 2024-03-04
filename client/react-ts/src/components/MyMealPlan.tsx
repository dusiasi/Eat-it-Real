import { MealData, MealPlan } from '../types';
import { getMyPlan } from '../APIService';
import MealList from './MealList';
import * as React from 'react';
import { useEffect } from 'react';
import { deleteFromPlan } from '../APIService';

type Props = {
  mealPlan: MealPlan[];
  setMealPlan: React.Dispatch<React.SetStateAction<Array<MealPlan>>>;
  mealData: MealData;
};

// MyMEALPLAN: mymeal plan component which goes to another page which displays the list of added plans
// todos:
// mealData is giving type error below-check with Felipe
// organisation of the page-do we want favorits, how to sort, how to organize this page like weekly plan or sth different,
// add -FAVS-favorites-make a list of favorites
// add -WEEKLY PLAN-weekly plan
// styling!!!

// get the meal plan from the database
export default function MyMealPlan({ mealPlan, setMealPlan, mealData }: Props) {
  const id = mealData._id;

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
      <section className="mealPlanContainer">
        {mealPlan.map((el, i) => (
          <React.Fragment key={i}>
            <MealList mealData={el} setMealPlan={setMealPlan} />

            <button className="buttonDelete" onClick={handleDelete}>
              DELETE
            </button>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
