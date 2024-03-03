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

// TODOS
// 1. addtomyplan !! check if the data-mealplan is already there, if yes do not add the same plan

export default function Home({
  mealPlan,
  setMealPlan,
  mealData,
  setMealData,
}: Props) {
  // const [mealData, setMealData] = useState<MealData>({} as MealData);

  async function addToMyplan() {
    // add only if the mealdata is not in the mymealplan
    await addMyPlan(mealData);
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
