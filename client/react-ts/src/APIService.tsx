const baseUrl = 'http://localhost:3000';
import { Values, Id, MealData } from './types';

// TODOS
// error handling
//

// here i do the post request to the backend to generate the meal plan
export async function generateMealPlan(body: Values) {
  try {
    const response = await fetch(`${baseUrl}/generate`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function addMyPlan(body: MealData) {
  try {
    const response = await fetch(`${baseUrl}/myplan`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

// get the plan from the db
// call this function when the user clicks my plan-which goes to another page

export async function getMyPlan() {
  try {
    const response = await fetch(`${baseUrl}/myplan`);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}
