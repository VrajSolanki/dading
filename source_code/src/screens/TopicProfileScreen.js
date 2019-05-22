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


export default class TopicProfileScreen extends React.Component {
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
          <Item title="Topic Profile" />
        </HeaderButtons>
        ),
  };

  render() {
    return (
    <ScrollView>
    <View style = {styles.container}>
    

      <View  style = {styles.box}>
        <Text style = {styles.header}>
          Tren-ding Topics
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                  <Topics topicType ="football" />
                  <Topics topicType ="cricket" />
                  <Topics topicType ="painting" />
                  <Topics topicType ="football" />
                  <Topics topicType ="game" />
            </ScrollView>
      </View>

      <View  style = {styles.box}>
        <Text style = {styles.header}>
          Recommended Topics!
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Topics topicType ="football" />
          <Topics topicType ="cricket" />
          <Topics topicType ="painting" />
          <Topics topicType ="football" />
          <Topics topicType ="game" />
            </ScrollView>
      </View>     

       <View  style = {styles.mdhe}>
        <Text style = {styles.header1}>
          All Topics!
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Topics topicType ="football" />
          <Topics topicType ="cricket" />
          <Topics topicType ="painting" />
          
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
    fontSize:20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  header1: {
    fontSize:18,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingRight: 70
  },
  box: {
    backgroundColor: "white",
    marginBottom: 4,
    padding: 6
  },
  tagline: {
    fontSize: 16,
    left: 155,
    fontStyle: 'italic',
    color: 'grey'
  },
  mdhe: {
    paddingLeft: 60,
    backgroundColor: "white",
    marginBottom: 4,
    
  }


});
