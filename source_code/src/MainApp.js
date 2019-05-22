import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {Text,View,Platform} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ConnectionScreen from "./screens/ConnectionScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TabBarIcon from "./components/TabBarIcon";
import ChatListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/ChatScreen";
import SettingsScreen from "./screens/SettingsScreen";
import InterestsScreen from "./screens/InterestsScreen";
import TopicProfileScreen from "./screens/TopicProfileScreen";
import { createAppContainer, createDrawerNavigator } from "react-navigation";

import CustomDrawerNavigator from "./components/CustomDrawerNavigator";
import Home from "./views/Home";
import Settings from "./views/Settings";
import About from "./views/About";
import Login from "./views/Home/PageA/Login";

const MainNavigator = createDrawerNavigator(
  {

    Login: {
     
      screen : Login
    },

    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "Home"
      },
      screen: Home
    },

    Settings: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" style={{ color: tintColor }} />
        ),
        drawerLabel: "Settings"
      },
      screen: Settings
    },

    About: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" style={{ color: tintColor }} />
        ),
        drawerLabel: "About"
      },
      screen: About
    }
  },
  {
    contentComponent: CustomDrawerNavigator
  }
);

const MainApp = createAppContainer(MainNavigator);
export default MainApp;
