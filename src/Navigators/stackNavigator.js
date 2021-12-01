import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ReviewDetailsPage from "../Pages/reviewDetailsPage";
import Main from "../Pages/mainPage";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "red",
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
