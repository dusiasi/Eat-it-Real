import { MealData, MealPlan } from '../types';
import { getMyPlan } from '../APIService';
import MealList from './MealList';
import * as React from 'react';
import { useEffect } from 'react';
import { deleteFromPlan } from '../APIService';
import { MdDeleteOutline } from 'react-icons/md';

type Props = {
  mealPlan: MealPlan[];
  setMealPlan: React.Dispatch<React.SetStateAction<Array<MealPlan>>>;
  mealData: MealData;
};

export default function MyMealPlan({ mealPlan, setMealPlan }: Props) {
  useEffect(() => {
    async function setData() {
      const result = await getMyPlan();

      setMealPlan(result);
    }

    setData();
  }, []);

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
        <h1>My Meal Plan</h1>
        {mealPlan.map((el, i) => (
          <React.Fragment key={i}>
            <MdDeleteOutline
              className="buttonDelete"
              onClick={() => handleDelete(el._id)}
            />
            <MealList mealData={el} setMealPlan={setMealPlan} />
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
