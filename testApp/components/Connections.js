import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'expo';

export default class Connections extends React.Component {
  render() {

    return (
       // Try setting `flexDirection` to `column`.
       <View style={styles.container}>
         <View>
         <Image source={require('../assets/images/pk.jpg')}
             style={styles.imageL} />
          <View style = {styles.infoL}>
          <Text style = {[styles.name,  {textAlign: 'left'}]}>Preetam Nahak</Text>
          <Text style ={[styles.dings, {textAlign: 'left'}]}>
                <Icon.Ionicons
                     name={'md-book'}
                     color = "#DF8869"
                     size={20}
                     />
                <Text style = {styles.countDing}>12 Dings</Text>
            </Text>
            <Text style = {[styles.mutual, {textAlign: 'left'}]}>
                <Icon.Ionicons
                       name={'md-book'}
                       color = "#DF8869"
                       size={20}
                       />
                 <Text style = {styles.mutualTopicCount}>15 mutual topics</Text>
             </Text>
             </View>
             <View style = {styles.drawLBorder}></View>
         </View>

         <View>
         <Image source={require('../assets/images/pk.jpg')}
             style={styles.imageR} />
          <View style = {styles.infoR}>
          <Text style = {[styles.name,  {textAlign: 'right'}]}>Preetam Nahak</Text>
          <Text style ={[styles.dings, {textAlign: 'right'}]}>
                <Text style = {styles.countDing}>12 Dings</Text>
                <Icon.Ionicons
                     name={'md-book'}
                     color = "#DF8869"
                     size={20}
                     />
            </Text>
            <Text style = {[styles.mutual, {textAlign: 'right'}]}>
                 <Text style = {styles.mutualTopicCount}>15 mutual topics</Text>
                 <Icon.Ionicons
                        name={'md-book'}
                        color = "#DF8869"
                        size={20}
                        />
             </Text>
           </View>
           <View style = {styles.drawRBorder}></View>
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
    alignItems: 'center',
  },

  imageR: {
    borderRadius: 40,
    width: 80,
    height: 80,
    right: -45,
    top: 5

  },
  imageL: {
    borderRadius: 40,
    width: 80,
    height: 80,
    top: 5,


  },
  infoL: {
    left: 80,
    top: -70,
    padding: 4,
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
  infoR: {
    top: -70,
    right: 85,
    padding: 4,

  },
  name: {
    fontSize: 16,
  },
  mutual: {
    color: 'grey',
    fontSize: 13,
    padding: 2
  },
  countDing:{
    color: 'grey',
    fontSize: 13,
    padding: 2
  },
  drawRBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    top: -30,
    width: '180%',
    right: 70

  },
  drawLBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    top: -30,
    width: '150%',


  }
});
