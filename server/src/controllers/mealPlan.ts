import { MealPlan } from '../modal/mealPlan';
import express, { Request, Response } from 'express';
const mealPlanApi = require('../mealPlanApi');

// TODO:check to add date created time etc here- where should i add in front or in backend-for the creation
// 1.Do sorting- by date for the plan it should be a better schema
// 2.add to db only if the list is already not there!!!
// TODOS:
// ERROR HANDLING and correct status

// generate plan with recipe information
exports.generatePlan = async (req: Request, res: Response) => {
  const body = req.body;

  // make the call to the Api with the body of the request that we get from the user
  const createPlan = await mealPlanApi.generateMealPlan(body);

  res.status(201).json(createPlan);

  try {
  } catch (error) {
    res.status(404).json({ msg: 'error' });
  }
};

exports.addToMyplan = async (req: Request, res: Response) => {
  const body = req.body;
  const { meals, nutrients } = body;

  MealPlan.create({ meals, nutrients });
  res.status(201).json({ msg: 'success' });

  try {
  } catch (error) {
    res.status(404).json({ msg: 'error' });
  }
};

// get all the meals from the db
exports.getAllMeals = async (req: Request, res: Response) => {
  try {
    // get the plan from the database
    const plans = await MealPlan.find({});
    res.status(200).json(plans);
  } catch (error) {
    res.status(404).json({ msg: 'error' });
  }
};

exports.deleteFromPlan = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deletePlan = await MealPlan.findByIdAndDelete(id);

    if (!deletePlan) {
      res
        .status(404)
        .json({ msg: 'Error, the requested resource is not found.' });
      return;
    }

    res.status(204).json({ msg: 'success, the item deleted' });
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'An unexpected error occurred while deleting the topic' });
  }
};
