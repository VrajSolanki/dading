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
import Dings from '../components/Dings'
import Topics from '../components/Topics'
import Recommendations from '../components/Recommendations'

const DisableableHeaderButton = props => (
  <HeaderButton
    {...props}
    background={Touchable.Ripple('white', true)}
    IconComponent={Ionicons}
    iconSize={35}
    color="white"
  />
);

export default class HomeScreen extends React.Component {
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
          <Item title="HOME" />
        </HeaderButtons>
        ),
  };

  render() {
    return (
    <ScrollView>
    <View style = {styles.container}>
      <View  style = {styles.box}>
        <Text style = {styles.header}>
            Dings
        </Text>
        <Text style = {styles.tagline}>
          Let's get dinging !
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                  <Dings />
                  <Dings />
                  <Dings />
                  <Dings />
                  <Dings />
            </ScrollView>

            <ScrollView contentContainerStyle={styles.scrollContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                    <Dings />
                    <Dings />
                    <Dings />
                    <Dings />
                    <Dings />
              </ScrollView>
      </View>

      <View  style = {styles.box}>
        <Text style = {styles.header}>
          Topics!
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                  <Topics />
                  <Topics />
                  <Topics />
                  <Topics />
                  <Topics />
            </ScrollView>
      </View>

      <View  style = {styles.box}>
        <Text style = {styles.header}>
          Recommendations!
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                  < Recommendations />
                  < Recommendations />
                  < Recommendations />
                  < Recommendations />
                  < Recommendations />
                  < Recommendations />
            </ScrollView>
      </View>


      <View  style = {styles.box}>
        <Text style = {styles.header}>
          Tren-ding-ers!
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                  <Dings />
                  <Dings />
                  <Dings />
                  <Dings />
                  <Dings />
            </ScrollView>

            <ScrollView contentContainerStyle={styles.scrollContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
                    <Dings />
                    <Dings />
                    <Dings />
                    <Dings />
                    <Dings />
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
  },
  ding: {
    padding: 20
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
  },
  staticContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap'      //// allow multiple rows
  },
  header: {
    fontSize:30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  box: {
    backgroundColor: "white",
    marginBottom: 30,
  },
  tagline: {
    fontSize: 20,
    left: 140,
    fontStyle: 'italic'
  }


});
