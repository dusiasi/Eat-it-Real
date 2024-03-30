import { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { generateMealPlan } from '../APIService';
import { Values } from '../types';
import { MealData } from '../types';

const diets = [
  { label: 'Gluten Free', value: 'gluten free' },
  { label: 'Vegetarian', value: 'vegetarian' },
  { label: 'Paleo', value: 'paleo' },
  { label: 'Ketogenic', value: 'ketogenic' },
  { label: 'Lactovegetarian', value: 'lactovegetarian' },
  { label: 'Ovo Vegetarian', value: 'ovovegetarian' },
  { label: 'Vegan', value: 'vegan' },
  { label: 'Pescetarian', value: 'pescetarian' },
  { label: 'Whole 30', value: 'whole30' },
];

type Diet = { label: string; value: string };

type Props = {
  setMealData: React.Dispatch<React.SetStateAction<MealData>>;
};

export default function Form({ setMealData }: Props) {
  const [selectedDiets, setSelectedDiets] = useState<Diet[]>([]);
  const [formValues, setFormValues] = useState<Values>({
    calories: '',
    diet: [],
    alergies: '',
  });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    // making the dietvalues string
    const dietValues = selectedDiets.map((diet) => {
      return diet.value;
    });

    const values = { ...formValues, diet: dietValues };

    // post request to the backend
    const mealData = await generateMealPlan(values);
    console.log(mealData);

    //set the meal data to the mealdata from the backend

    setMealData(mealData);

    // empty the form
    setSelectedDiets([]);

    setFormValues({
      calories: '',
      diet: [],
      alergies: '',
    });
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  return (
    <>
      <form className="mealFormContainer" onSubmit={handleSubmit}>
        <label htmlFor="calories">
          Calories:
          <input
            type="text"
            placeholder="calories a day"
            onChange={onChange}
            name="calories"
            value={formValues.calories}
          />
        </label>
        <label htmlFor="alergies">
          Alergies:
          <input
            type="text"
            placeholder="exclude ingredients..."
            onChange={onChange}
            name="alergies"
            value={formValues.alergies}
          />
        </label>
        <label htmlFor="dietChoice">
          Diet choice:
          <div className="multiselect">
            <MultiSelect
              className="multiSelect"
              options={diets}
              value={selectedDiets}
              onChange={setSelectedDiets}
              labelledBy="Select"
            />
          </div>
        </label>
        <button className="btnSubmit" type="submit">
          Create Daily Meal Plan
        </button>
      </form>
    </>
  );
}
