import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/myMealPlan">My Meal Plan</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
