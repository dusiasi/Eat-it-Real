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
const mealPlanApi = require('../mealPlanApi');
exports.post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('add to meal plan');
});
exports.generatePlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // i want to send this body to the mealplanapi to make the fetc
    const body = req.body;
    // make the call to the Api with the body of the request that we get from the user
    const createPlan = mealPlanApi.generateMealPlan(body);
    // then we should send back the result that we get from the api to the front end
    // const mealPlan = mealPlanApi.generateMealPlan();
    // res.send('send the meal plan');
    res.status(200).json({ msg: 'success' });
    console.log(req.body);
    console.log('generate meal plan');
    try {
    }
    catch (error) {
        // check the status end error handling
        res.status(404).json({ msg: 'error' });
    }
});
// {
//     calories: '2000',
//      diet: [ 'gluten free', 'vegetarian' ],
//      alergies: 'egg,soy',
//      timeFrame: 'daily'
//    }
