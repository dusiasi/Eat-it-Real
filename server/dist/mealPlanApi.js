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
const apiKey = '4156b7dc1b5e4110912cbca90242f78a';
//api call to generate meal plan
function generateMealPlan(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const baseURL = `https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&timeFrame=day`;
            const params = Object.entries(body)
                .reduce((acc, [key, value]) => {
                acc.push(`${key}=${value}`);
                return acc;
            }, [])
                .join('&');
            // first api call to generate the
            const url = `${baseURL}&${params}`;
            const response = yield fetch(url);
            const data = yield response.json();
            // second api call to get the recipe info
            const newData = yield Promise.all(data.meals.map((el) => __awaiter(this, void 0, void 0, function* () {
                const recipeData = yield getRecipeInformation(el.id);
                return recipeData;
            })));
            // return data;
            const mergedData = data.meals.map((meal, i) => (Object.assign(Object.assign({}, meal), newData[i])));
            const nutrients = data.nutrients;
            return { meals: mergedData, nutrients };
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.generateMealPlan = generateMealPlan;
function getRecipeInformation(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            const recipeInformation = { image: data.image, summary: data.summary };
            const recipeImage = data.image; //maybe i change it later
            return recipeInformation;
        }
        catch (error) {
            console.log(error);
        }
    });
}
