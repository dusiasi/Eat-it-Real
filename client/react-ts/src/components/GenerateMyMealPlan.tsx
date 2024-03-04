import Form from './Form';
import { MealData, MealPlan } from '../types';
import * as React from 'react';
import { addMyPlan } from '../APIService';
import MealList from './MealList';

type Props = {
  mealPlan: MealPlan[];
  setMealPlan: React.Dispatch<React.SetStateAction<Array<MealPlan>>>;
  mealData: MealData;
  setMealData: React.Dispatch<React.SetStateAction<MealData>>;
};

// GENERATEMEALPLAN: Add to my plan function, to add the generated meal plan to my meal plan
export default function GenerateMyMealPlan({
  mealPlan,
  setMealPlan,
  mealData,
  setMealData,
}: Props) {
  async function addToMyplan() {
    const id = mealData._id;

    mealData = { ...mealData, created_at: Date.now() };

    const exists = mealPlan.some((el) => el._id === id);

    if (!exists) {
      const result = await addMyPlan(mealData);
      setMealPlan((prevList) => [...prevList, result]);
    }
  }

  return (
    <>
      <Form setMealData={setMealData} />
      <div className="container">
        {Object.values(mealData).length !== 0 && (
          <React.Fragment>
            <button className="button" onClick={addToMyplan}>
              Add to my Plan
            </button>
            <MealList
              mealData={mealData}
              setMealPlan={setMealPlan}
              mealPlan={mealPlan}
            />
          </React.Fragment>
        )}
      </div>
    </>
  );
}
