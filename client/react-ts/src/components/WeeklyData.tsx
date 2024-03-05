import React from 'react';
import { WeeklyMealData } from '../types';

type Props = {
  weeklyMealData: WeeklyMealData;
  setWeeklyMealData: React.Dispatch<React.SetStateAction<WeeklyMealData>>;
};

export default function WeeklyData({
  weeklyMealData,
  setWeeklyMealData,
}: Props) {
  return <div>WeeklyData</div>;
}
