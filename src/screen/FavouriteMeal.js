import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

import CustomHeaderButton from "../components/HeaderButton";

const FavouriteMeal = (props) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeal);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.container}>
        <Text>No favourite Meal found !!</Text>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

// FavouriteMeal.navigationOtions = () => {
//   return {
//     headerTitle: "Your Favourite",
//   };
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

FavouriteMeal.navigationOptions = (navigationData) => {
  return {
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavouriteMeal;
