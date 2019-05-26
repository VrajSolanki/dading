import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'expo';

export default class Ding_Icon extends React.Component {
  render() {
    return (
        <View style={{flexDirection:'row', paddingBottom:4}}>
        <Text style={{marginLeft:'1%', fontSize:13}}>1. Michael Scott</Text>
        <Image source={require('../images/coin.png')} style={{width: 20, height: 20, marginLeft:'5%'}}    />
        <Text style={{paddingLeft: 3, fontSize:11}}>4000</Text>
        </View>
    );
  }
}