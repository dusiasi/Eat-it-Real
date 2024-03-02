import Form from './Form';
import { MealData, MealPlan } from '../types';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import MyMealPlan from './MyMealPlan';

type Props = {
  setMealData: React.Dispatch<React.SetStateAction<MealData>>;
  mealPlan: MealPlan[];
  setMealPlan: React.Dispatch<React.SetStateAction<Array<MealPlan>>>;
};

export default function Navbar({ setMealData, mealPlan, setMealPlan }: Props) {
  return (
    <>
      <div className="navbar">
        <form>
          <input name="query" />
          <button type="submit">Search</button>
        </form>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route
              path="/myMealPlan"
              element={
                <MyMealPlan mealPlan={mealPlan} setMealPlan={setMealPlan} />
              }
            />
            <Route
              path="/createPlan"
              element={<Form setMealData={setMealData} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
