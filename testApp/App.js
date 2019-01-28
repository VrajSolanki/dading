import React from 'react';
import { Text, View,  Platform } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LinksScreen from './screens/LinksScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import TabBarIcon from './components/TabBarIcon';
import Ding_Icon from './components/Ding_Icon'
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation';

// const stack1 = createStackNavigator({
//   Home: HomeScreen,
//     Settings: SettingsScreen
//
// });
//
// const stack2 = createStackNavigator({
//     Links: LinksScreen,
//     Profile: Profile
//
// });

const HomeStack  = createStackNavigator({
  Home:HomeScreen
});
HomeStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      size = {35}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const SettingsStack  = createStackNavigator({
  Settings:ProfileScreen
});
SettingsStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      size = {35}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
    />
  ),
};

const LinksStack  = createStackNavigator({
  Links:HomeScreen
});
LinksStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <Ding_Icon />
  ),
};

const NavStack  = createStackNavigator({
  Profile:ProfileScreen
});
NavStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      size = {35}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-compass' : 'md-compass'}
    />
  ),
};

const NotificationStack  = createStackNavigator({
  Settings:HomeScreen
});
NotificationStack.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      size = {35}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'}
    />
  ),
};

const TabNavigation = createBottomTabNavigator({
  Home: HomeStack,
  Bottom: SettingsStack,
  Links: LinksStack,
  Links1: NavStack,
  Links2: NotificationStack,
},
{
  tabBarOptions: {
  showLabel:false,
  inactiveTintColor:'green',
  activeTintColor: 'red',
  labelStyle: {
    fontSize: 2,
  },
  style: {
    backgroundColor: '#FEC107',
    color:'red'
  },
}
});

const TabsWithDrawerNavigation = createDrawerNavigator({
  Profile: {
    screen: TabNavigation,
  },
  Account:{
    screen:HomeScreen
  }
});


// const AppNavigator = createStackNavigator({
//   TabsWithDrawer: {
//     screen: HomeScreen,
//   }
// });

const AppContainer = createAppContainer(TabsWithDrawerNavigation);

// Now AppContainer is the main component for React to render

export default AppContainer;
