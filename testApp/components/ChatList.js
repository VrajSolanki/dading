import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'expo';

export default class ChatList extends React.Component {
  render() {

    return (
       // Try setting `flexDirection` to `column`.
       <View style={styles.container}>
         <View>
           <Image source={require('../assets/images/pk.jpg')}
             style={styles.imageL} />
        </View>
          <View style = {styles.text}>
            <View style = {styles.info}>
                <Text style = {styles.infoName}>
                    Michel Scott | Football
                </Text>
                <Text style = {styles.infoTime}>
                    2.30 PM
                </Text>
            </View>
            <View style = {styles.message}>
                  <Text style = {styles.messageText}>
                    Hey what's up ? What's going on bro?
                    Hey what's up ? What's going on bro?
                  </Text>
            </View>
            <View style = {styles.border}></View>
          </View>
         </View>
     );

  }
}

const styles = StyleSheet.create({
  messageText: {
    marginLeft: 15,
    top: 10,
    color: 'grey'
  },
  infoTime:{
    fontSize: 10,
    color: 'grey',
    top: 18
  },
  infoName:{
    marginLeft: 15,
    top: 15,
    fontSize: 15
  },
  message:{
    flex: 1,
    paddingBottom: 6
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    flex: 1,

  },
  border:{
    borderBottomWidth: 1,
    borderBottomColor: '#e0ebeb',
    top: 8,
    width: '100%'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  imageL: {
    borderRadius: 35,
    width: 70,
    height: 70,
    top: 7,


  }
});
