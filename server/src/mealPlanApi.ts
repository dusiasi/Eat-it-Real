// check later why this doesnt work
const API_KEY = process.env.API_KEY;
// const apiKey = '4156b7dc1b5e4110912cbca90242f78a';
// const apiKey = 'f89493870f7f49218037ead5e2499e6a';
// const apiKey = '4f69e984a91b4692957b42e62c9dcb0a';
// const apiKey = '461cdab76f404525b26fb89265c00d00';
const apiKey = 'eb4c334e92a24e4aae4fa52c6e2462f2';

// TODOS:
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
    } else if (body.timeFrame === 'weekly' || 'week') {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getRecipeInformation(id: number) {
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const recipeInformation = { image: data.image, summary: data.summary };
    const recipeImage = data.image; //maybe i change it later

    return recipeInformation;
  } catch (error) {
    console.log(error);
  }
}
