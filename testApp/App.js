import React from "react";
import {
  Text,
  View,
  Platform
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ConnectionScreen from "./screens/ConnectionScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TabBarIcon from "./components/TabBarIcon";
import Ding_Icon from "./components/Ding_Icon";
import ChatListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/ChatScreen";
import SettingsScreen from "./screens/SettingsScreen";

import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";

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

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  ChatsBox: HomeScreen
});
HomeStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon size = {
      35
    }
    focused = {
      focused
    }
    name = {
      Platform.OS === "ios" ? "ios-home" : "md-home"
    }
    />
  )
};

const ConnectionStack = createStackNavigator({
  Settings: ConnectionScreen
});
ConnectionStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon size = {
      35
    }
    focused = {
      focused
    }
    name = {
      Platform.OS === "ios" ? "ios-people" : "md-people"
    }
    />
  )
};

const LinksStack = createStackNavigator({
  Links: ProfileScreen
});
LinksStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({
    focused
  }) => < Ding_Icon / >
};

const NavStack = createStackNavigator({
  Profile: ConnectionScreen
});
NavStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon size = {
      35
    }
    focused = {
      focused
    }
    name = {
      Platform.OS === "ios" ? "ios-compass" : "md-compass"
    }
    />
  )
};

const NotificationStack = createStackNavigator({
  Settings: HomeScreen
});
NotificationStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon size = {
      35
    }
    focused = {
      focused
    }
    name = {
      Platform.OS === "ios" ? "ios-notifications" : "md-notifications"
    }
    />
  )
};

const TabNavigation = createBottomTabNavigator({
  Home: HomeStack,
  Connection: ConnectionStack,
  Links: LinksStack,
  Links1: NavStack,
  Links2: NotificationStack
}, {
  tabBarOptions: {
    showLabel: false,
    inactiveTintColor: "green",
    activeTintColor: "red",
    labelStyle: {
      fontSize: 2
    },
    style: {
      backgroundColor: "rgb(255,193,7)",
      color: "red"
    }
  }
});

const TabsWithDrawerNavigation = createDrawerNavigator({
  Home: {
    screen: TabNavigation
  },
  Chats: {
    screen: ChatListScreen
  },
  ChatBox: {
    screen: ChatScreen
  },
  Setting: {
    screen: SettingsScreen
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
