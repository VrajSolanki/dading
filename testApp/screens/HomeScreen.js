import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import { WebBrowser } from 'expo';
import { movies } from '../src/data';
import Poster from '../src/Poster';


import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView>
          <View style={styles.container}>
            <View style = {styles.box}>
              <Text style = {styles.header}>
                  Dings
              </Text>
              <ScrollView contentContainerStyle={[styles.scrollContent, styles.staticContent]}
      		  // Hide all scroll indicators
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={false}>
              {movies.map((movie, index) => <Poster
              movie={movie}
              key={index}
              />)}
              </ScrollView>
              </View>

              <View  style = {styles.box}>
                <Text style = {styles.header}>
                    My Topics
                </Text>
                <ScrollView contentContainerStyle={styles.scrollContent}
              // Hide all scroll indicators
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={false}
                  horizontal={true}>
                {movies.map((movie, index) => <Poster
                movie={movie}
                key={index}
                />)}
                </ScrollView>
                </View>

                <View  style = {styles.box}>
                  <Text style = {styles.header}>
                      Recommendaations
                  </Text>
                  <ScrollView contentContainerStyle={styles.scrollContent}
                // Hide all scroll indicators
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}>
                  {movies.map((movie, index) => <Poster
                  movie={movie}
                  key={index}
                  />)}
                  </ScrollView>
                  </View>
          </View>
          </ScrollView>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',

  },
  header: {
    fontSize:30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
  },
  staticContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap'      //// allow multiple rows
  },
  box: {
    backgroundColor: "white",
    marginTop: 30
  }
});
