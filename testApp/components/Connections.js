import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'expo';

export default class Connections extends React.Component {
  render() {

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
                          <Icon.FontAwesome
                               name={'comments'}
                               color = "#ED6630"
                               size={16}
                               />
                          <Text style = {styles.dingTopic}>12 dings</Text>
                      </Text>
                      <Text>
                          <Icon.FontAwesome
                               name={'clipboard'}
                               color = "#FBBE17"
                               size={16}
                               />
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
                        <Icon.FontAwesome
                             name={'comments'}
                             color = "#ED6630"
                             size={16}
                             />
                    </Text>
                    <Text>
                          <Text style = {styles.dingTopic}>15 mutual topics</Text>
                          <Icon.FontAwesome
                               name={'clipboard'}
                               color = "#FBBE17"
                               size={16}
                               />
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
