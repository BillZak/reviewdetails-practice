import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//import pages
import HomePage from "../Pages/homePage";
import SearchPage from "../Pages/searchPage";
import NotificationPage from "../Pages/notificationPage";
import AboutmePage from "../Pages/aboutmePage";
//import vector icons
import { Ionicons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
        <Tab.Screen
          name="home"
          component={HomePage}
          options={{
            tabBarIcon: (props) => (
              <Ionicons
                name="home-outline"
                size={props.size}
                color={props.color}
              />
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
        />
        <Tab.Screen
          name="search"
          component={SearchPage}
          options={{
            tabBarIcon: (props) => (
              <Ionicons name="search" size={props.size} color={props.color} />
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
        />
        <Tab.Screen
          name="notification"
          component={NotificationPage}
          options={{
            tabBarIcon: (props) => (
              <Ionicons
                name="notifications-outline"
                size={props.size}
                color={props.color}
              />
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
        />
        <Tab.Screen
          name="aboutme"
          component={AboutmePage}
          options={{
            tabBarIcon: (props) => (
              <AntDesign name="user" size={props.size} color={props.color} />
            ),
            tabBarLabel: () => {
              return null;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
