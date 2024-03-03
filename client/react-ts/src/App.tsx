import * as React from 'react';
import { useState } from 'react';
import './App.css';
import MyMealPlan from './components/MyMealPlan';
import Navbar from './components/Navbar';
import { MealData, MealPlan } from './types';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

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
      </Routes>
    </>
  );
}

export default App;
