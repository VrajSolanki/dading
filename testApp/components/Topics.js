import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Icon } from 'expo';
export default class Topics extends React.Component {
  render() {
    return (
      <View style={styles.container}>
            <View style= {styles.outerBox}>
                  <View style= {styles.innerBox}>
                      <Text style = {styles.text}>
                          Cricket
                      </Text>
                      <View style = {styles.icon}>
                          <Icon.Ionicons
                              name={'md-football'}
                              color = "black"
                              size={60}
                            />
                      </View>
                  </View>
            </View>
            <View style = {styles.dingers}>
              <Text style = {styles.topic}>Football</Text>
              <View style = {styles.dingerIcon}>
                    <Icon.Ionicons
                      name={'md-heart'}
                      color = "red"
                      size={12}
                      />
               </View>

              <Text style = {styles.dingerText}>200 Dingers</Text>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  topic: {
    justifyContent: 'center',
    alignItems: 'center',
    left:12,
    top: 2,
    fontWeight: 'bold',
    paddingBottom: 3
  },
  dingerText: {
    top:-20,
    fontSize: 11,
    color: 'grey',
    left: 8,
    padding: 5,
  },
  dingerIcon: {
    top: 0,
    left: -1
  },
  innerBox:{
    height: 70,
    width: 70,
    backgroundColor:'#FCBE4E',
    margin: 2,
    padding: 4,
    borderRadius: 20,
    borderColor: '#FB9F00',
    borderWidth: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -2
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color:"white",
    position: 'absolute',
    top: 80,
    left: 45
  },

});
