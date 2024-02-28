"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const mealPlan = require('./controllers/mealPlan');
exports.router = (0, express_1.Router)();
// router functions for sending to database and other db operations
exports.router.get('/', mealPlan.post);
