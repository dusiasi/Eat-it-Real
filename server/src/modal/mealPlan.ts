import { mongoose } from './index';
import { Schema, Document, Model, model } from 'mongoose';

// TODOS:
// check the subdocuments for the relations etc and typescript stuff
// kind of works, there should be daily and weekly schema- check the subdocuments relations and typescript stuff
// subdocuments, mealplan schema with array of meals
// mealschema the child of the mealplan which is type object with title, image,sourceUrl,summary,nutrients-SHOULD BE MORE THAN ONE SCHEMA-DO THEM AND CHECK RELATIONSHIP
//  for the plan it should be a better schema-check daily,weekly and how i want to receive it in the front
// do the typescript type definitions, and

type Meal = {
  id: Number;
  title: String;
  image?: String;
  imageType?: String;
  sourceUrl?: String;
  summary?: String;
  servings?: Number;
  readyInMinutes?: Number;
};

type Nutrients = {
  calories?: Number;
  protein?: Number;
  fat?: Number;
  carbohydrates?: Number;
};

type MealPlan = {
  meals: Meal[];
  nutrients: Nutrients;
  created_at: Date;
};

const mealPlanSchema = new Schema<MealPlan>({
  meals: [
    {
      id: Number,
      title: String,
      image: String,
      imageType: String,
      sourceUrl: String,
      summary: String,
      servings: Number,
      readyInMinutes: Number,
    },
  ],

  nutrients: {
    calories: Number,
    protein: Number,
    fat: Number,
    carbohydrates: Number,
  },
  created_at: { type: Date, default: Date.now() },
});

export const MealPlan = mongoose.model<MealPlan>('MealPlan', mealPlanSchema);
