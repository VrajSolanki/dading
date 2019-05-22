import React, {Component} from 'react';
import {createMaterialTopTabNavigator,TabNavigator, TabBarBottom} from "react-navigation";
import {Text, View, StyleSheet, Platform} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import PageA from "../../views/Home/PageA";
import PageB from "../../views/Home/PageB";
import PageC from "../../screens/HomeScreen";

export class Ding_Icon extends React.Component {
    async componentWillMount() {
        await Expo
            .Font
            .loadAsync({Roboto: require("../../assets/fonts/Roboto/Roboto-Regular.ttf"), Roboto_medium: require("../../assets/fonts/Roboto/Roboto-Medium.ttf"), Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")});
        this.setState({loading: false});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.ding}>DING!</Text>
            </View>
        );
    }
}

const tabConfigs = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    // inactiveTintColor: '#425563',
     //activeTintColor: '#fff',
    // activeBackgroundColor: '#ff6900',
    // indicatorStyle: {
    //   display: 'none',
    // }
    // ,
    // showIcon: true,
    // tabStyle: {
    //   width: '100%',
    // },
    // labelStyle: {
    //   fontSize: 11,
    //   fontWeight: 'bold',
    //   marginBottom: 5,
    // },
    style: {
      backgroundColor: '#FEC107',
      // height: 55,
      // width: '100%',
      // borderTopWidth: 0,
      // position: 'absolute',
      // bottom: 0,
      // left: 0,
      // right: 0,
      // shadowColor: "#000",
      // shadowOffset: {
      //   width: 0,
      //   height: 1,
      // },
      // shadowOpacity: 0.22,
      // shadowRadius: 2.22,
    },
  }
};
const CustomTabNavigator = createMaterialTopTabNavigator({
    PageA: {
        navigationOptions: {
            tabBarLabel: <Ionicons
                    name=
                    { Platform.OS === "ios" ? "ios-home" : "md-home" }
                     size={40} color="white"/>

        },
        screen: PageA
    },
    PageB: {
        navigationOptions: {
            tabBarLabel:<Ionicons
            name=
            { Platform.OS === "ios" ? "ios-people" : "md-people" }
             size={40} color="white"/>
        },
        screen: PageB
    },
    PageC: {
        navigationOptions: {
            tabBarLabel: <Ding_Icon/>
        },
        screen: PageC
    },
    PageD: {
        navigationOptions: {
            tabBarLabel: <Ionicons
            name=
            {Platform.OS === "ios" ? "ios-compass" : "md-compass" }
             size={40} color="white"/>
        },
        screen: PageB
    },
    PageE: {
        navigationOptions: {
            tabBarLabel: <Ionicons
            name=
            {Platform.OS === "ios" ? "ios-notifications" : "md-notifications" }
             size={40} color="white"/>
        },
        screen: PageB
    }
},
tabConfigs
// {
//     tabBarPosition: "bottom"
// }, {
//     tabBarComponent: TabBarBottom
// }, {
//     tabBarOptions: {
//         style: {
//             backgroundColor: '#FEC107',
//             activeBackgroundColor: '#FEC107'
//         }
//     }
// }
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 35,
        width: 50,
        height: 50,
        bottom: 1,

        borderColor: '#FEC107'
    },
    ding: {
        transform: [
            {
                rotate: '330deg'
            }
        ],
        fontWeight: 'bold',
        fontSize: 15,
        color: '#D6684A'
    }
});
export default CustomTabNavigator;
