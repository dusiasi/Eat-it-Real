import { MealPlan, MealsT, Nutrients } from '../types';
import { getMyPlan } from '../APIService';
import MealList from './MealList';
import * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

type Props = {
  mealPlan: MealPlan[];
  setMealPlan: React.Dispatch<React.SetStateAction<Array<MealPlan>>>;
};

// todos:
// mealData is giving type error below
// Delete from list !! backend call db etc
//update?
// sort
// add date and plan-created
// add weekly plan
// styling!!!
//it still shows the navbar below, check it so that it is not there

export default function MyMealPlan({ mealPlan, setMealPlan }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    async function setData() {
      const result = await getMyPlan();

      setMealPlan(result);
    }
    setData();
  }, []);

  function handleClick() {
    navigate('/');
  }

  return (
    <>
      <a href="" onClick={() => handleClick()}>
        Home
      </a>
      <section className="mealPlanContainer">
        {mealPlan.map((el, i) => (
          <React.Fragment key={i}>
            <MealList mealData={el} />
            <button>Delete from plan</button>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
