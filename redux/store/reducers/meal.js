import { MEALS } from "../../../src/data/dummy-data";
import { TOGGLE_FAVOURITE, SET_FILTERS } from "../actions/mealAction";

const INITIAL_STATE = {
  meal: MEALS,
  filteredMeal: MEALS,
  favouriteMeal: [],
};

const MealReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeal.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeal = [...state.favouriteMeal];
        updatedFavMeal.slice(existingIndex, 1);
        return { ...state, favouriteMeal: updatedFavMeal };
      } else {
        const isMeal = state.meal.find((meal) => meal.id === action.mealId);
        return { ...state, favouriteMeal: state.favouriteMeal.concat(isMeal) };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meal.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeal: updatedFilteredMeals };

    default:
      return state;
  }
};

export default MealReducer;
