import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'expo';

const Connections = (props) => {
var dings = require('../assets/icons/cn1.png');
var mutual = require('../assets/icons/cn2.png');
    return (
       <View style={styles.container}>
          <View style = {styles.leftTab}>
                <View>
                <Image source={require('../assets/images/pk.jpg')}
                    style={styles.leftImg} />
                </View>
                <View style={styles.leftInfo}>
                      <Text style={styles.name}>
                          Micheal Scott
                      </Text>
                      <Text>
                      <Image source={dings}
                          style={styles.dings} />
                          <Text style = {styles.dingTopic}>12 dings</Text>
                      </Text>
                      <Text>
                      <Image source={mutual}
                          style={styles.mutual} />
                            <Text style = {styles.dingTopic}>15 mutual topics</Text>
                      </Text>
                </View>
          </View>
          <View style = {styles.rightTab}>
              <View style={styles.rightInfo}>
                    <Text style={styles.name}>
                        Micheal Scott
                    </Text>
                    <Text>
                        <Text style = {styles.dingTopic}>12 dings</Text>
                        <Image source={dings}
                            style={styles.dings} />
                    </Text>
                    <Text>
                          <Text style = {styles.dingTopic}>15 mutual topics</Text>
                          <Image source={mutual}
                              style={styles.mutual} />
                    </Text>
              </View>
              <View>
              <Image source={require('../assets/images/pk.jpg')}
                  style={styles.rightImg} />
              </View>
          </View>
       </View>
     );

  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 5,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor:'#e0ebeb',
    borderStyle: 'dotted',

  },
  dings:{
    width: 17,
    height: 17
  },
  mutual:{
    width: 17,
    height: 17
  },
  dingTopic:{
    fontSize: 14,
    color: 'grey',
    marginBottom: 9,
  },
  name:{
    fontSize: 13,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  leftImg:{
    borderRadius: 35,
    width: 70,
    height: 70,
    marginRight: 5
  },
  leftTab: {
    flexDirection: 'row',
    borderRightWidth: 0.8,
    borderRightColor:'#e0ebeb',
    borderStyle: 'dotted',
    justifyContent: 'flex-start',
    paddingRight: 8

  },
  rightImg:{
    borderRadius: 35,
    width: 70,
    height: 70,
    marginLeft: 5
  },
  rightTab: {
    flexDirection: 'row',
    borderLeftWidth: 0.8,
    borderLeftColor:'#e0ebeb',
    borderStyle: 'dotted',
    justifyContent: 'flex-end',
    paddingLeft:8

  },
  rightInfo:{
    alignItems: 'flex-end'
  },
  leftInfo:{
      alignItems: 'flex-start'
  }
});
export default Connections
