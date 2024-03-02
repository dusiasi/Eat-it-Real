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
const generatePlan = require('./controllers/mealPlan');
// console.log(generatePlan());
const API_KEY = process.env.API_KEY;
// here i do the api calls from the spoonacular API
function generateMealPlan(body) {
    return __awaiter(this, void 0, void 0, function* () {
        // if (!API_KEY) {
        //   throw new Error('API key not found');
        // }
        try {
            const baseURL = 'https://api.spoonacular.com/mealplanner/generate';
            const params = Object.entries(body)
                .reduce((acc, [key, value]) => {
                acc.push(`${key}=${value}`);
                return acc;
            }, [])
                .join('&');
            console.log(params);
            console.log(API_KEY);
            const url = `${baseURL}?apiKey=${API_KEY}&${params}`;
            const response = yield fetch(url);
            const data = yield response.json();
            console.log(data);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.generateMealPlan = generateMealPlan;
