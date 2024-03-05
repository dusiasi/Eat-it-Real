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
// mealData and _id is giving type error below-check with Felipe
// organisation of the page-do we want favorits, how to sort, how to organize this page like weekly plan or sth different,
// add -FAVS-favorites-make a list of favorites
// add -WEEKLY PLAN-weekly plan
// styling!!!

export default function MyMealPlan({ mealPlan, setMealPlan, mealData }: Props) {
  // get my plan from the server-db
  useEffect(() => {
    async function setData() {
      const result = await getMyPlan();

      setMealPlan(result);
    }

    setData();
  }, []);

  // delete from the plan
  async function handleDelete(id: string) {
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
            <button
              className="buttonDelete"
              onClick={() => handleDelete(el._id)}
            >
              DELETE from plan
            </button>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
