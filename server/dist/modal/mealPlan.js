"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlan = void 0;
const index_1 = require("./index");
const mongoose_1 = require("mongoose");
const mealPlanSchema = new mongoose_1.Schema({
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
exports.MealPlan = index_1.mongoose.model('MealPlan', mealPlanSchema);
