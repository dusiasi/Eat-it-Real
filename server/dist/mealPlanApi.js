"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMealPlan = void 0;
// check later why this doesnt work
const API_KEY = process.env.API_KEY;
// const apiKey = '4156b7dc1b5e4110912cbca90242f78a';
const apiKey = 'f89493870f7f49218037ead5e2499e6a';
//api call to generate meal plan
function generateMealPlan(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const baseURL = 'https://api.spoonacular.com/mealplanner/generate';
            const params = Object.entries(body)
                .reduce((acc, [key, value]) => {
                acc.push(`${key}=${value}`);
                return acc;
            }, [])
                .join('&');
            // first api call to generate the
            const url = `${baseURL}?apiKey=${apiKey}&${params}`;
            const response = yield fetch(url);
            const data = yield response.json();
            // second api call to get the recipe info
            if (body.timeFrame === 'daily') {
                const newData = yield Promise.all(data.meals.map((el) => __awaiter(this, void 0, void 0, function* () {
                    const recipeData = yield getRecipeInformation(el.id);
                    return recipeData;
                })));
                // return data;
                const mergedData = data.meals.map((meal, i) => (Object.assign(Object.assign({}, meal), newData[i])));
                const nutrients = data.nutrients;
                return { meals: mergedData, nutrients };
            }
            else if (body.timeFrame === 'weekly' || 'week') {
                // object.values
                const newWeek = {};
                const days = Object.keys(data.week);
                days.forEach((day) => {
                    newWeek[day] = {
                        meals: Promise.all(data.week[day].meals.map((meal) => __awaiter(this, void 0, void 0, function* () {
                            return yield getRecipeInformation(meal.id);
                        }))),
                    };
                });
                console.log('=========>', newWeek);
                const nutrients2 = Object.values(data.week).map((mealObj) => mealObj.nutrients);
                const newData3 = Object.values(data.week).map((mealObj) => __awaiter(this, void 0, void 0, function* () {
                    return yield Promise.all(mealObj.meals.map((el) => __awaiter(this, void 0, void 0, function* () {
                        const recipeData = yield getRecipeInformation(el.id);
                        return recipeData;
                    })));
                }));
                // console.log('newdata 3------', newData3); //new data is also an array of objects
                return data;
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.generateMealPlan = generateMealPlan;
// Write the week logic later inside the above function, it doesnt work with this one- the api call gives an array of week object,where each day is an object with meals and nutritiens
// {week: friday
// meals:  (3) [{…}, {…}, {…}]
// nutrients: {calories: 1230.72, protein: 61.79, fat: 85.8, carbohydrates: 54.67}
// {week:monday:{},tuesday:{meals:[{},{},{}],nutrients}}//then do the same logic for inside the meals
function getRecipeInformation(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            const recipeInformation = { image: data.image, summary: data.summary };
            return recipeInformation;
        }
        catch (error) {
            console.log(error);
        }
    });
}
// const newData2 = await Promise.all(
//   Object.values(data.week).map(async (mealObj: any) =>
//     mealObj.meals.map(async (el: { id: number }) => {
//       const recipeData = await getRecipeInformation(el.id);
//       return recipeData;
//     })
//   )
// );
