export type Values = {
  calories: string;
  diet: Diet[];
  alergies: string;
  timeFrame: string;
};

export type Id = number;

export type MealsT = {
  id: Id;
  title: string;
  image: string;
  imageType: string;
  sourceUrl: string;
  summary: string;
  servings: number;
  readyInMinutes: number;
};

export type Nutrients = {
  calories: number;
  protein: number;
  fat: number;
  carbohydrates: number;
};

export type MealData = {
  meals: Array<MealsT>;
  nutrients: Nutrients;
  _id: string;
  created_at: number;
};

export type MealPlan = Array<MealData>;

export type WeeklyMealData = {
  week: {
    monday: MealData;
    tuesday: MealData;
    wednesday: MealData;
    thursday: MealData;
    friday: MealData;
    saturday: MealData;
    sunday: MealData;
  };
};
