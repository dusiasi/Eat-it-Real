import { Link } from 'react-router-dom';

export default function Navbar() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
            <button onClick={refreshPage}>Click to reload!</button>
          </li>
          <li>
            <Link to="/myMealPlan">My Meal Plan</Link>
          </li>
          <li>
            <Link to="/generateMealPlan">Generate Meal Plan</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
