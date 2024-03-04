import * as React from 'react';
import { useState } from 'react';
import './App.css';
import MyMealPlan from './components/MyMealPlan';
import Navbar from './components/Navbar';
import { MealData, MealPlan } from './types';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import GenerateMyMealPlan from './components/GenerateMyMealPlan';

// APP:Router and the setstates
// TODOS:

function App() {
  const [mealPlan, setMealPlan] = useState<Array<MealPlan>>([]);
  const [mealData, setMealData] = useState<MealData>({} as MealData);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              mealPlan={mealPlan}
              setMealPlan={setMealPlan}
              mealData={mealData}
              setMealData={setMealData}
            />
          }
        />
        <Route
          path="/myMealPlan"
          element={
            <MyMealPlan
              mealPlan={mealPlan}
              setMealPlan={setMealPlan}
              mealData={mealData}
            />
          }
        />
        <Route
          path="/generateMealPlan"
          element={
            <GenerateMyMealPlan
              mealPlan={mealPlan}
              setMealPlan={setMealPlan}
              mealData={mealData}
              setMealData={setMealData}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
