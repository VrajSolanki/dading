import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'expo';

export default class Connections extends React.Component {
  render() {

    if(this.props.alignment == 'left'){
      return (
        <View style={styles.containerL}>
        </View>
      );
    }
    else{
      return (
        <View style={styles.containerR}>
            <View style = {[styles.info]}>
            <Text style = {[styles.name,  {textAlign: 'right'}]}>Preetam Nahak</Text>
                <Text style ={[styles.dings,  {textAlign: 'right'}]}>
                    <Text style = {[styles.countDing]}>17 Dings</Text>
                    <Icon.Ionicons
                      name={'md-book'}
                      color = "#DF8869"
                      size={15}
                      />
                  </Text>
                  <Text style = {[styles.mutual,  {textAlign: 'right'}]}>
                      <Text style = {styles.mutualTopicCount}>15 mutual topics</Text>
                      <Icon.Ionicons
                        name={'md-book'}
                        color = "#DF8869"
                        size={15}
                        />
                    </Text>
            </View>
            <View style={styles.outerCircle}>
            <Image source={require('../assets/images/pk.jpg')}
                style={styles.image} />
            </View>

        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  containerR: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    right: -210,
    top: -30

  },
  containerL: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    top: 50
  },
  image: {
    borderRadius: 40,
    width: 80,
    height: 80,

  },
  outerCircle: {
    alignItems: 'center',
    borderRadius: 40,
    width: 80,
    height: 80,
    margin: 5
  },
  info: {
    padding: 5,
  },
  name: {
    fontSize: 14,
  },
  dings: {
    color: 'grey',
    fontSize: 12,
    padding: 2
  },
  mutual: {
    color: 'grey',
    fontSize: 12,
    padding: 2
  },
  countDing:{
    padding: 2,
  },
  mutualTopicCount: {
    margin: 2
  }
});
