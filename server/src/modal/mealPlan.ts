import { mongoose } from './index';

const Schema = mongoose.Schema;

// export const Schema = mongoose.Schema;
// const mealPlanSchema = new Schema({});

// export const MealPlan = mongoose.model('MealPlan', mealPlanSchema);

const mealPlanSchema = new Schema({ recipe: String });

export const MealPlan = mongoose.model('MealPlan', mealPlanSchema);
