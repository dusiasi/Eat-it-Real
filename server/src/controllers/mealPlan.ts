import { MealPlan } from '../modal/mealPlan';
import express, { Request, Response } from 'express';
import { generateMealPlan } from '../mealPlanApi';
const mealPlanApi = require('../mealPlanApi');

// TODOS:
// ERROR HANDLING and correct status

// generate plan with recipe information
exports.generatePlan = async (req: Request, res: Response) => {
  const body = req.body;

  // make the call to the Api with the body of the request that we get from the user
  const createPlan = await mealPlanApi.generateMealPlan(body);
  // console.log('here-createplan', createPlan, 'end');

  res.status(200).json(createPlan);

  try {
  } catch (error) {
    // check the status end error handling
    res.status(404).json({ msg: 'error' });
  }
};

// TODO:check to add date created time etc here- where should i add in front or in backend-for the creation
// 1.Do sorting- by date for the plan it should be a better schema
// 2.add to db only if the list is already not there!!!
exports.addToMyplan = async (req: Request, res: Response) => {
  const body = req.body;
  const { meals, nutrients } = body;

  console.log('meals----', meals);
  console.log('nutients----', nutrients);

  // send data to the database
  // check the body for the schemal
  MealPlan.create({ meals, nutrients });
  res.status(200).json({ msg: 'success' });

  try {
  } catch (error) {
    // check the status end error handling
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
