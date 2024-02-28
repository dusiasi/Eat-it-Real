const baseUrl = 'http://localhost:3000';

export async function getAllRecipes() {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postPlan(newPlan: []) {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlan),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
