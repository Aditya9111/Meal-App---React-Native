import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screen/CategoriesScreen";
import CategoriesMeal from "../screen/CategoriesMeal";
import MealDetailScreen from "../screen/MealDetailScreen";
import FavouriteMeal from "../screen/FavouriteMeal";
import Filter from "../screen/Filter";

import { Platform } from "react-native";
import Colors from "../constants/color";
import Icon from "react-native-vector-icons/Ionicons";

const MealNavigators = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoriesMeal,
    },
    MealDetail: MealDetailScreen,
  },
  {
    initialRouteName: "Categories",
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      title: "Meal Categories",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
    },
  }
);

const FavNavigator = createStackNavigator(
  {
    Favourite: FavouriteMeal,
    Meal: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      title: "Your Favourite",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
    },
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealNavigators,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Icon name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
    },
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Icon name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accent,
    },
  },
};

const MealFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accent,
        },
      });

const FilterNav = createStackNavigator(
  {
    Filter: Filter,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTitleStyle: { fontFamily: "OpenSans-Bold" },
      headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealFavs: {
      screen: MealFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filter: {
      screen: FilterNav,
      navigationOptions: {
        title: "Filter",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
    },
  }
);

export default createAppContainer(MainNavigator);
