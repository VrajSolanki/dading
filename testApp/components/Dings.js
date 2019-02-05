import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'expo';

export default class Dings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.outerCircle}>
        <Image source={require('../assets/images/pk.jpg')}
            style={styles.image} />
        <View style = {styles.name}>
          <Text style = {styles.text}>Preetam</Text>
        </View>
        <View style = {styles.interest}>
        <View style = {styles.interestIcon}>
              <Icon.Ionicons
                name={'md-book'}
                color = "#DF8869"
                size={20}
                />
         </View>
            <Text style = {styles.textAlt}>Football</Text>
        </View>

         <View style = {styles.topic}>
         <View style = {styles.topicIcon}>
               <Icon.Ionicons
                 name={'md-clipboard'}
                 color = "#DF8869"
                 size={20}
                 />
          </View>
            <Text style = {styles.textAlt}>Novice</Text>
        </View>
        <View style={styles.star}>
          <Icon.Ionicons
            name={'md-star'}
            color = "#FFC006"
            size={40}
            style={{alignItems: 'center'}}
          />
        </View>
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
    padding:15,
    paddingBottom:70
  },
  outerCircle: {
    alignItems: 'center',
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  circle: {
    borderRadius: 15,
    width: 30,
    height: 30,
    borderColor: '#00796A',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 60,
    left: 60

  },
  image: {
    borderRadius: 40,
    width: 80,
    height: 80,

  },
  interest: {
    position: 'absolute',
    top: 85,
    left: 15,
    padding: 5,
    borderRadius: 5,
    color: 'grey'
  },
   topic: {
    position: 'absolute',
    top: 105,
    left: 15,
    padding: 5,
    borderRadius: 5,
    color: 'grey'
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  textAlt: {
    fontSize: 11,
    color: 'grey'
  },
  name: {
    top:5,
    fontSize: 15,
  },
  star: {
    position: 'absolute',
    top:-5,
    left:-4
  },
  interestIcon: {
    top:18,
    left: -25
  },
  topicIcon: {
    top: 18,
    left: -25
  }
});
