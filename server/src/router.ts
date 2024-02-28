import { Router } from 'express';
const mealPlan = require('./controllers/mealPlan');
export const router = Router();

// router functions for sending to database and other db operations
router.get('/', mealPlan.post);
