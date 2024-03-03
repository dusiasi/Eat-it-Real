import * as React from 'react';
import { useState } from 'react';
import './App.css';
import MealList from './components/MealList';
import MyMealPlan from './components/MyMealPlan';
import Navbar from './components/Navbar';
import { MealData, MealPlan } from './types';
import { addMyPlan } from './APIService';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Form from './components/Form';

// TODOS:

function App() {
  // const [mealData, setMealData] = useState<MealData>({} as MealData); //not sure from this
  const [mealPlan, setMealPlan] = useState<Array<MealPlan>>([]);

  // async function addToMyplan() {
  //   console.log('add the mealData to my plan');
  //   // do i need return or sth else?
  //   await addMyPlan(mealData);
  // }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/myMealPlan"
          element={<MyMealPlan mealPlan={mealPlan} setMealPlan={setMealPlan} />}
        />
      </Routes>
      {/* <Form setMealData={setMealData} /> */}
      {/* <div className="container">
        {Object.values(mealData).length !== 0 && (
          <React.Fragment>
            <button className="button" onClick={addToMyplan}>
              Add to my Plan
            </button>
            <MealList mealData={mealData} />
          </React.Fragment>
        )}
      </div> */}
    </>
  );
}

export default App;
