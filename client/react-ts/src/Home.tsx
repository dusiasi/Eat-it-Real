import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

type Props = {};

export default function Home({}: Props) {
  const navigate = useNavigate();
  function navigateToForm() {
    navigate('/createPlan');
  }

  return (
    <div>
      <Link to="/myMealPlan">My Meal Plan</Link>
      <button onClick={() => navigateToForm()}> Create Meal Plan</button>
      <Link to="/createPlan">Create Meal Plan</Link>
    </div>
  );
}
