import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ReviewDetailsPage from "../Pages/reviewDetailsPage";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ReviewDetails" component={ReviewDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
