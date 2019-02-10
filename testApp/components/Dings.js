import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'expo';

  const Dings = (props) => {
    var topic = props.topic;
    var interest = props.interest;
    console.log(topic);
    console.log(interest);
    var iconInterest, iconTopic;
    if(interest == "football"){
        iconInterest = require('../assets/icons/h5.png');
    }
    if(topic == "t1"){
      iconTopic = require('../assets/icons/h2.png');
    }
    else if(topic == "t2"){
      iconTopic = require('../assets/icons/h4.png');
    }
    else if(topic == "t3"){
      iconTopic = require('../assets/icons/h3.png');
    }
    else if(topic == "t4"){
      iconTopic = require('../assets/icons/h1.png');
    }
    return (
      <View style={styles.container}>
        <View style={styles.outerCircle}>
        <Image source={require('../assets/images/pk.jpg')}
            style={styles.image} />
        <View style = {styles.name}>
          <Text style = {styles.text}>Preetam</Text>
        </View>
        <View style = {styles.info}>
            <Text>
            <Image source={iconInterest}
                style={styles.iconInterest} />
                <Text style = {styles.textAlt}>Football</Text>
            </Text>
            <Text>
            <Image source={iconTopic}
                style={styles.iconTopic} />
                <Text style = {styles.textAlt}>Novice</Text>
            </Text>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding:14,
    paddingBottom: 80
  },
  info:{
    marginTop: 4,
    padding: 3
  },
  iconTopic:{
    width: 17,
    height: 17
  },
  iconInterest:{
    width: 17,
    height: 17
  },
  outerCircle: {
    alignItems: 'center',
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  image: {
    borderRadius: 40,
    width: 80,
    height: 80,
    },
text: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  textAlt: {
    fontSize: 12,
    color: 'grey',

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

});
export default Dings
