import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoriesMeal = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availaibleMeal = useSelector((state) => state.meals.filteredMeal);

  const selectCategory = CATEGORIES.find((cat) => cat.id === catId);

  const displayMeal = availaibleMeal.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayMeal.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No meals found , Please check your filters,</Text>
      </View>
    );
  }

  return <MealList listData={displayMeal} navigation={props.navigation} />;
};

CategoriesMeal.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectCategory.title,
  };
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default CategoriesMeal;
