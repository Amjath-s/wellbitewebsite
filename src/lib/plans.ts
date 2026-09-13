/**
 * Meal plans mirrored from the WellBite customer app
 * (healthfit/assets/data/subscription_plans.json).
 * No prices — pricing is calculated in the app.
 */

export type MealPlan = {
  id: string;
  name: string;
  meals: string[];
  allowSalad: boolean;
  allowSplit: boolean;
  description: string;
  popular?: boolean;
};

export const mealPlans: MealPlan[] = [
  {
    id: "plan_1",
    name: "3 Meals",
    meals: ["Breakfast", "Lunch", "Dinner"],
    allowSalad: true,
    allowSplit: false,
    description: "Full-day coverage with breakfast, lunch, and dinner.",
    popular: true,
  },
  {
    id: "plan_2",
    name: "Breakfast + Dinner",
    meals: ["Breakfast", "Dinner"],
    allowSalad: true,
    allowSplit: true,
    description: "Start and end your day covered — midday free for you.",
  },
  {
    id: "plan_3",
    name: "Lunch + Dinner",
    meals: ["Lunch", "Dinner"],
    allowSalad: true,
    allowSplit: true,
    description: "Midday and evening meals for a lighter morning routine.",
  },
  {
    id: "plan_4",
    name: "Breakfast + Lunch",
    meals: ["Breakfast", "Lunch"],
    allowSalad: false,
    allowSplit: true,
    description: "Morning and midday focus when evenings are flexible.",
  },
];

/** Durations from SubscriptionPeriod in the customer app */
export const subscriptionDurations = [
  { weeks: 1, label: "1 Week", days: 7 },
  { weeks: 2, label: "2 Weeks", days: 14 },
  { weeks: 3, label: "3 Weeks", days: 21 },
  { weeks: 4, label: "4 Weeks (1 Month)", days: 30 },
] as const;

export const pricingNote =
  "Final pricing is calculated in the WellBite app based on your meals, options, and subscription duration.";

export function planOptionsLabel(plan: MealPlan): string {
  const parts: string[] = [];
  if (plan.allowSalad) parts.push("Salad pack optional");
  if (plan.allowSplit) parts.push("Split delivery addresses available");
  if (parts.length === 0) return "Standard delivery";
  return parts.join(" · ");
}
