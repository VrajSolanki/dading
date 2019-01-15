import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'expo';

export default class Dings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.outerCircle}>
          <Icon.Ionicons
            name={'md-person'}
            color = "white"
            size={140}
            style={{alignItems: 'center'}}
          />
        <View style = {styles.interest}>
            <Text style = {styles.text}>Football</Text>
        </View>

         <View style = {styles.topic}>
            <Text style = {styles.text}>Novice</Text>
        </View>

        <View style={styles.circle}>
            <Image source={require('../assets/images/india.jpg')}
                style={styles.image} />
        </View>
        <View style={styles.star}>
          <Icon.Ionicons
            name={'md-star'}
            color = "#04BCD1"
            size={55}
            style={{alignItems: 'center'}}
          />
          <Text style = {[styles.rating, styles.text]}>4.3</Text>
        </View>
        </View>
        <View style = {styles.name}>
        <Text style = {styles.text}>Preetam</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
    padding: 15
  },
  outerCircle: {
    alignItems: 'center',
    borderRadius: 80,
    width: 160,
    height: 160,
    borderColor: '#00796A',
    borderWidth: 2,
    backgroundColor: '#00796A',
  },
  circle: {
    borderRadius: 30,
    width: 60,
    height: 60,
    borderColor: '#00796A',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 120,
    left: 110

  },
  image: {
    borderRadius: 30,
    width: 60,
    height: 60,

  },
  interest: {
    backgroundColor:'#04BCD1',
    position: 'absolute',
    top: 140,
    left: -15,
    padding: 5,
    borderRadius: 5,
  },
   topic: {
    backgroundColor:'#04BCD1',
    position: 'absolute',
    top: 10,
    left: -15,
    padding: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  name: {
    top:10
  },
  rating: {
    top: -38,
    left: 10
  },
  star: {
    position: 'absolute',
    top:5,
    right: -10
  }
});
