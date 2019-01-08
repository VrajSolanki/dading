import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel:' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      size = {35}
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const NotificationStack = createStackNavigator({
  Notification: HomeScreen,
});

NotificationStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      size = {35}
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-notifications${focused ? '' : '-outline'}`
          : 'md-notifications'
      }
    />
  ),
};

const NavigationStack = createStackNavigator({
  Navigation: HomeScreen,
});

NavigationStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      size = {35}
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-compass${focused ? '' : '-outline'}`
          : 'md-compass'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      size = {35}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      size = {65}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
    />
  ),
};

const ShareStack = createStackNavigator({
  Share: SettingsScreen,
});

ShareStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      size = {35}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-analytics' : 'md-analytics'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ShareStack,
  SettingsStack,
  NavigationStack,
  NotificationStack
},
{
  tabBarOptions: {
  activeTintColor: 'white',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: '#00796A',
  },
}
});
