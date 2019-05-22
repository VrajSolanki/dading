import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {   Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList, Button} from 'react-native';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import Connections from '../components/Connections'

const DisableableHeaderButton = props => (
  <HeaderButton
    {...props}
    background={Touchable.Ripple('white', true)}
    IconComponent={Ionicons}
    iconSize={35}
    color="white"
  />
);

export default class ConnectionScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#FEC107',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <HeaderButtons HeaderButtonComponent={DisableableHeaderButton}>
        <Item title="search" iconName="ios-search" onPress={() => alert('search')} disabled />
        <Item title="select" iconName="ios-navigate" onPress={() => alert('select')} />
      </HeaderButtons>
    ),
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={DisableableHeaderButton}>
          <Item title="search" iconName="ios-menu" onPress={() => alert('search')} disabled />
          <Item title="CONNECTIONS" />
        </HeaderButtons>
        ),
  };

  render() {
    return (
    <ScrollView>
    <View style = {styles.container}>
    <View  style = {styles.box}>
          <ScrollView contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                  <Connections />
                  <Connections />
                  <Connections />
                  <Connections />
                  <Connections />
                  <Connections />
                  <Connections />
                  <Connections />
                  <Connections />
            </ScrollView>
      </View>

      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    padding: 2
  },

  scrollContent: {
   // arrange posters in rows
   flexWrap: 'wrap',       // allow multiple rows
 },
  box: {
    backgroundColor: "white",
  },


});
