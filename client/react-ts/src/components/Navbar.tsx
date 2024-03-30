import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">
          <div id="logo">EAT IT REAL</div>
        </Link>
        <div id="navbarLinks">
          <Link to="/myMealPlan">My Meal Plan</Link>
          <Link to="/generateMealPlan">Create Meal Plan</Link>
        </div>
      </nav>
    </>
  );
}
