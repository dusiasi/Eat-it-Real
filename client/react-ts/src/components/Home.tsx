// HOMEPAGE

import { Link } from 'react-router-dom';
import homepage1 from '../images/homepage2.jpg';

export default function Home() {
  return (
    <>
      <div className="homepageContainer">
        <div className="wrapperHomepage">
          <div className="homepageText">
            <p>Create a Meal Plan for Your Dietary Needs</p>
          </div>
          <Link to="/generateMealPlan">
            <button className="createButton">Create Meal Plan</button>
          </Link>
        </div>
        <img className="homeImage" src={homepage1} />
      </div>
    </>
  );
}
