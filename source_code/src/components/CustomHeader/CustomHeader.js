import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

import styles from "./styles";

const CustomHeader = ({ navigation }) => (
  <View style={{...styles.container,  flexDirection: "row"}}>
    <View style = {{marginLeft : 10, marginTop: 5}}>
    <Ionicons
      name="md-menu"
      size={40}
      color="white"
      onPress={() => navigation.openDrawer()}
    />
    </View >
    <View style = {{marginLeft : 130}}>
    <Ionicons
      name="md-radio-button-off"
      size={45}
      color="white"
      onPress={() => navigation.openDrawer()}
    />
    </View>
    <View style = {{marginLeft : -8}}>
    <Ionicons
      name="ios-notifications"
      size={45}
      color="white"
      onPress={() => navigation.openDrawer()}
    />
    </View>
    <View style = {{marginLeft : -8}}>
    <Ionicons
      name="md-home"
      size={45}
      color="white"
      onPress={() => navigation.openDrawer()}
    />
    </View>

    {/* <View style = {{marginLeft : -2}}>
    <Ionicons
      name="ios-search"
      size={45}
      color="white"
      onPress={() => navigation.openDrawer()}
    />
    </View>

    <View style = {{marginLeft : -8}}>
    <Ionicons
      name="ios-navigate"
      size={45}
      color="white"
      onPress={() => navigation.openDrawer()}
    />
    </View> */}
  </View>
);

export default CustomHeader;
