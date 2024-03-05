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

// FORM: makes the api call to generate the mealplan, and handles the form

// TODOS:
// 1.generating meal plan takes a little bit time, check it with Felipe
// 2.decide if you want it the form to stay always there or come with button click!!!
// weekly plan

export default function Form({ setMealData }: Props) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [selectedDiets, setSelectedDiets] = useState<Diet[]>([]);
  const [formValues, setFormValues] = useState<Values>({
    calories: '',
    diet: [],
    alergies: '',
    timeFrame: '',
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

    //set the meal data to the mealdata from the backend

    setMealData(mealData);

    // empty the form
    setSelectedDiets([]);

    setFormValues({
      calories: '',
      diet: [],
      alergies: '',
      timeFrame: '',
    });
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  return (
    <>
      {/* {showForm ? ( */}
      <form className="mealForm" onSubmit={handleSubmit}>
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
        <label htmlFor="dietChoice">
          Diet choice:
          <div className="multiselect">
            <MultiSelect
              options={diets}
              value={selectedDiets}
              onChange={setSelectedDiets}
              labelledBy="Select"
            />
          </div>
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
        <label htmlFor="dailyWeekly">
          Daily/weekly:
          <input
            type="text"
            placeholder="daily/weekly..."
            onChange={onChange}
            name="timeFrame"
            value={formValues.timeFrame}
          />
        </label>
        <button id="btnSubmit" type="submit">
          Create Meal Plan
        </button>
        {/* {<button onClick={() => setShowForm(false)}>Discard</button>} */}
      </form>
      {/* ) : (
        <button onClick={() => setShowForm(true)}>Create Meal Plan</button>
      )} */}
    </>
  );
}
