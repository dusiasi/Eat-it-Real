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

// Home component: home page, does not have anything yet

// TODOS
// 1. addtomyplan !! check if the data-mealplan is already there, if yes do not add the same plan
// 2.Home page should refresh to the beginning, at the moment when i create a new plan, because it is in the homepage, it just stays there- check how to add refreshing to the homepage or make the createmeal plan to another route and page!
// DOESNT WORK-add to my list, it still adds if the plan is alredy there, it doesnt add if i stay in the page, but if refresh or change the page and come back, it adds again

export default function Home({
  mealPlan,
  setMealPlan,
  mealData,
  setMealData,
}: Props) {
  // async function addToMyplan() {
  //   const id = mealData._id;

  //   const exists = mealPlan.some((el) => el._id === id);

  //   if (!exists) {
  //     const result = await addMyPlan(mealData);
  //     setMealPlan((prevList) => [...prevList, result]);
  //   }
  // }

  return (
    <>
      <Form setMealData={setMealData} />
      {/* <div className="container">
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
      </div> */}
    </>
  );
}
