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
const mealPlan_1 = require("../modal/mealPlan");
const mealPlanApi = require('../mealPlanApi');
// TODO:check to add date created time etc here- where should i add in front or in backend-for the creation
// 1.Do sorting- by date for the plan it should be a better schema
// 2.add to db only if the list is already not there!!!
// TODOS:
// ERROR HANDLING and correct status
// generate plan with recipe information
exports.generatePlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    // make the call to the Api with the body of the request that we get from the user
    const createPlan = yield mealPlanApi.generateMealPlan(body);
    res.status(201).json(createPlan);
    try {
    }
    catch (error) {
        res.status(404).json({ msg: 'error' });
    }
});
exports.addToMyplan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { meals, nutrients } = body;
    console.log(body);
    mealPlan_1.MealPlan.create({ meals, nutrients });
    res.status(201).json(body);
    try {
    }
    catch (error) {
        res.status(404).json({ msg: 'error' });
    }
});
// get all the meals from the db
exports.getAllMeals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get the plan from the database
        const plans = yield mealPlan_1.MealPlan.find({});
        res.status(200).json(plans);
    }
    catch (error) {
        res.status(404).json({ msg: 'error' });
    }
});
exports.deleteFromPlan = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletePlan = yield mealPlan_1.MealPlan.findByIdAndDelete(id);
        if (!deletePlan) {
            res
                .status(404)
                .json({ msg: 'Error, the requested resource is not found.' });
            return;
        }
        res.status(204).json({ msg: 'success, the item deleted' });
    }
    catch (error) {
        res
            .status(500)
            .json({ msg: 'An unexpected error occurred while deleting the topic' });
    }
});
