// Area groups for the area dropdown
export const AREA_OPTIONS = [
  { label: 'Weight', value: 'weight' },
  { label: 'Volume', value: 'volume' },
  { label: 'Time', value: 'time' },
  { label: 'Length', value: 'distance' },
  { label: 'Energy', value: 'energy' },
  { label: 'Unitless', value: 'unitless' },
  { label: 'Other', value: 'other' },
];

// Measure options by area
export const MEASURE_OPTIONS_BY_AREA: { [key: string]: { label: string; value: string }[] } = {
  weight: [
    { label: 'Kilograms (kg)', value: 'kg' },
    { label: 'Grams (g)', value: 'g' },
    { label: 'Pounds (lbs)', value: 'lbs' },
    { label: 'Ounces (oz)', value: 'oz' },
    { label: 'Stones (st)', value: 'st' },
    { label: 'Milligrams (mg)', value: 'mg' },
    { label: 'Tons (t)', value: 't' },
  ],
  unitless: [
    { label: 'Unitless', value: 'unitless' },
  ],
  volume: [
    { label: 'Liters (L)', value: 'L' },
    { label: 'Milliliters (ml)', value: 'ml' },
    { label: 'Cups', value: 'cups' },
    { label: 'Fluid Ounces (fl oz)', value: 'fl_oz' },
    { label: 'Gallons (gal)', value: 'gal' },
    { label: 'Pints (pt)', value: 'pt' },
    { label: 'Quarts (qt)', value: 'qt' },
  ],
  time: [
    { label: 'Seconds (s)', value: 's' },
    { label: 'Minutes (min)', value: 'min' },
    { label: 'Hours (hr)', value: 'hr' },
    { label: 'Days (d)', value: 'd' },
  ],
  distance: [
    { label: 'Kilometers (km)', value: 'km' },
    { label: 'Meters (m)', value: 'm' },
    { label: 'Miles (mi)', value: 'mi' },
    { label: 'Yards (yd)', value: 'yd' },
    { label: 'Feet (ft)', value: 'ft' },
    { label: 'Inches (in)', value: 'in' },
    { label: 'Centimeters (cm)', value: 'cm' },
    { label: 'Millimeters (mm)', value: 'mm' },
  ],
  energy: [
    { label: 'Calories (kcal)', value: 'kcal' },
    { label: 'Joules (J)', value: 'j' },
  ],
  length: [],
  speed: [],
  other: [
    { label: 'Other', value: 'other' },
  ],
};
// Period options for period dropdown
export const PERIOD_OPTIONS = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Biweekly', value: 'biweekly' },
  { label: 'Monthly', value: 'monthly' },
];
// Measurement units for goals/increments dropdown, grouped by type
export const MEASURE_OPTIONS = [
  { label: 'Kilograms (kg)', value: 'kg' },
  { label: 'Grams (g)', value: 'g' },
  { label: 'Pounds (lbs)', value: 'lbs' },
  { label: 'Ounces (oz)', value: 'oz' },
  { label: 'Liters (L)', value: 'L' },
  { label: 'Milliliters (ml)', value: 'ml' },
  { label: 'Calories (kcal)', value: 'kcal' },
  { label: 'Minutes (min)', value: 'min' },
  { label: 'Hours (hr)', value: 'hr' },
  { label: 'Repetitions (reps)', value: 'reps' },
  { label: 'Steps', value: 'steps' },
  { label: 'Pages', value: 'pages' },
  { label: 'Other', value: 'other' },
];
// src/utils/Constants.tsx
// Centralized constants and dropdown options for the app

export const HABIT_CATEGORIES = [
  'Health',
  'Fitness',
  'Productivity',
  'Learning',
  'Mindfulness',
  'Finance',
  'Social',
  'Other',
];

export const GOAL_TYPES = [
  { label: 'Pass/Fail', value: 'pass' },
  { label: 'Numerical', value: 'number' },
];

export const INCREMENT_OPTIONS = [1, 2, 5, 10];

export const MAX_TITLE_LENGTH = 25;

export const DEFAULT_INCREMENT = 1;

export const COLORS = [
  '#7a0404',
  '#B22222',
  '#750101',
  '#22223B',
  '#4A4E69',
  '#9A8C98',
  '#C9ADA7',
];
