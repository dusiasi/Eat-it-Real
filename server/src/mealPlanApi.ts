// check later why this doesnt work
const API_KEY = process.env.API_KEY;
// const apiKey = '4156b7dc1b5e4110912cbca90242f78a';
const apiKey = 'f89493870f7f49218037ead5e2499e6a';

// TODOS:
// weekly plan-at the moment doesnt work i get only daily plan
// api key -should work with env-check with Felipe
// check error handling

type Meal = {
  id: number;
  title: string;
  image: string;
  imageType: string;
  sourceUrl: string;
  summary: string;
  servings: number;
  readyInMinutes: number;
};

//api call to generate meal plan
export async function generateMealPlan(body: {
  targetCalories?: number;
  timeFrame?: string;
  diet?: string[];
  exclude?: string;
}) {
  try {
    const baseURL = 'https://api.spoonacular.com/mealplanner/generate';

    const params = Object.entries(body)
      .reduce((acc: string[], [key, value]) => {
        acc.push(`${key}=${value}`);
        return acc;
      }, [])
      .join('&');

    // first api call to generate the
    const url = `${baseURL}?apiKey=${apiKey}&${params}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // second api call to get the recipe info
    if (body.timeFrame === 'daily') {
      const newData = await Promise.all(
        data.meals.map(async (el: { id: number }) => {
          const recipeData = await getRecipeInformation(el.id);
          return recipeData;
        })
      );

      // return data;
      const mergedData = data.meals.map((meal: Meal, i: number) => ({
        ...meal,
        ...newData[i],
      }));
      const nutrients = data.nutrients;

      return { meals: mergedData, nutrients };
    } else return data;
  } catch (error) {
    console.log(error);
  }
}

// Write the week logic later inside the above function, it doesnt work with this one- the api call gives an array of week object,where each day is an object with meals and nutritiens
// {week: friday
// meals:  (3) [{…}, {…}, {…}]
// nutrients: {calories: 1230.72, protein: 61.79, fat: 85.8, carbohydrates: 54.67}
// {week:monday:{},tuesday:{meals:[{},{},{}],nutrients}}//then do the same logic for inside the meals

async function getRecipeInformation(id: number) {
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    // const recipeInformation = [data.image, data.summary];
    const recipeInformation = { image: data.image, summary: data.summary };

    return recipeInformation;
  } catch (error) {
    console.log(error);
  }
}
