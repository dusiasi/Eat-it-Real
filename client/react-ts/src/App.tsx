import * as React from 'react';
import { useState } from 'react';
import './App.css';
import MealList from './components/MealList';
import MyMealPlan from './components/MyMealPlan';
import Navbar from './components/Navbar';
import { MealData, MealPlan } from './types';
import { addMyPlan } from './APIService';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

// TODOS:
// MY meal plan goes to another page with router, when the user clicks on the mymealPlan-it doesnt show the link yet

function App() {
  const [mealData, setMealData] = useState<MealData>({} as MealData); //not sure from this
  const [mealPlan, setMealPlan] = useState<Array<MealPlan>>([]);

  async function addToMyplan() {
    console.log('add the mealData to my plan');
    // do i need return or sth else?
    await addMyPlan(mealData);
  }

  return (
    <>
      <Navbar
        setMealData={setMealData}
        mealPlan={mealPlan}
        setMealPlan={setMealPlan}
      />
      <div className="container">
        {Object.values(mealData).length !== 0 && (
          <React.Fragment>
            <button className="button" onClick={addToMyplan}>
              Add to my Plan
            </button>
            <MealList mealData={mealData} />
          </React.Fragment>
        )}
        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/myMealPlan"
              element={
                <MyMealPlan mealPlan={mealPlan} setMealPlan={setMealPlan} />
              }
            />
          </Routes>
        </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
