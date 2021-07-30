import React from "react";
import { View, Text } from "react-native";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealNavigators from "./src/navigation/MealsNavigator";
import MealReducer from "./redux/store/reducers/meal";

enableScreens();

const rootReducer = combineReducers({
  meals: MealReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <MealNavigators />
    </Provider>
  );
};

export default App;
