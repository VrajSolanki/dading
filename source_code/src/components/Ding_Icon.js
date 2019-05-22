import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'expo';

export default class Ding_Icon extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style = {styles.ding}>DING!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 35,
    width: 70,
    height: 70,
    bottom: 5,
    borderWidth: 6,
    margin: 45,
    borderColor: '#FEC107'
  },
  ding: {
     transform: [{ rotate: '330deg'}],
     fontWeight: 'bold',
     fontSize: 20,
     color: '#D6684A'
  }
});
