import { Router } from 'express';
const mealPlan = require('./controllers/mealPlan');
export const router = Router();

// router functions for sending to database and other db operations
router.post('/generate', mealPlan.generatePlan);
router.post('/myplan', mealPlan.addToMyplan);
router.get('/myplan', mealPlan.getAllMeals);
