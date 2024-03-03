import Form from './components/Form';
import { MealData } from './types';
import * as React from 'react';
import { useState } from 'react';
import { addMyPlan } from './APIService';
import MealList from './components/MealList';

export default function Home() {
  const [mealData, setMealData] = useState<MealData>({} as MealData);

  async function addToMyplan() {
    console.log('add the mealData to my plan');
    // do i need return or sth else?
    await addMyPlan(mealData);
  }

  return (
    <>
      <div>
        <Form setMealData={setMealData} />
      </div>
      <div className="container">
        {Object.values(mealData).length !== 0 && (
          <React.Fragment>
            <button className="button" onClick={addToMyplan}>
              Add to my Plan
            </button>
            <MealList mealData={mealData} />
          </React.Fragment>
        )}
      </div>
    </>
  );
}
