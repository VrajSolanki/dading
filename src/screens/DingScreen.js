import React, { Component } from 'react';
import {   Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CustomHeader from "../components/CustomHeader";
import { Dropdown } from 'react-native-material-dropdown';
import DingName from "../components/DingName";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class HomeScreen extends React.Component {
  render() {
    let data = [{
        value: 'Banglore',
      }, {
        value: 'Pune',
      }, {
        value: 'Mumbai',
      }];
    return (
        <View style={{backgroundColor:'white', height:'100%'}}>
        
              
          <View style={{alignSelf:'flex-end', width:'30%',paddingRight:10, marginTop:'5%'}}>
            <TouchableOpacity>
              <Dropdown
                label='Country'
               data={data}
                />
            </TouchableOpacity>
          </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', width:'50%', alignSelf:'center'}}>
        <TouchableOpacity style={styles.navigate}>
        <Text style={styles.navigateText}>DAILY</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigate}>
        <Text style={styles.navigateText}>WEEKLY</Text> 
        </TouchableOpacity>      
        <TouchableOpacity style={styles.navigate}>
        <Text style={styles.navigateText}>TOTAL</Text> 
        </TouchableOpacity>      
    
      </View>


        <View style={{flexDirection:'row', justifyContent:'space-between', alignSelf:'center'}}>

      <View style={styles.Outline} >
      
      
      <TouchableOpacity
                  style={styles.Opacity}
                  activeOpacity = { .5 }
                 >
        
                    <Text style={{ marginTop: 10,
          fontSize: 15, textAlign:'center' , color: 'black',}}> User Leaderboard</Text>
                    
              </TouchableOpacity>
              <DingName />
              <DingName />
              <DingName />
              <DingName />
              <Text style={{marginLeft:'2%', fontWeight:'bold'}}>.</Text>
              <Text>.</Text>
       
              <Text>.</Text>
              <DingName />
      
      
      
      </View>

      
      
      
      
      <View style={styles.Outline1} >
        <TouchableOpacity
                  style={styles.Facebook}
                  activeOpacity = { .5 }
                 >
        
                    <Text style={{ marginTop: 10,
          fontSize: 15, textAlign:'center' , color: 'black'}}> SME Leaderboard </Text>
                    
              </TouchableOpacity>
             <DingName />
             <DingName />
             <DingName />
             <DingName />
              <Text>.</Text>
              <Text>.</Text>
       
              <Text>.</Text>

              <DingName />
      
      </View>



      </View>
            
            <Text style={{marginTop:'10%', marginLeft:'5%', fontSize: 15, fontWeight:'bold'}}>My Rewards</Text>

<View style={{flexDirection:'row', justifyContent:'space-between'}}>

      <View style={styles.Tab1}>
      <Image source={require('../images/reward1.jpg')} style={styles.reward}   />
      <Text style={{textAlign:'center'}}>Rewards</Text>

      
      </View>

      <View style={styles.Tab1}>
      <Image source={require('../images/reward2.jpg')} style={styles.reward}     />
      <Text style={{textAlign:'center'}}>Rewards</Text>

      
      </View>

      <View style={styles.Tab1}>
      <Image source={require('../images/reward3.jpg')} style={styles.reward}    />
      <Text style={{textAlign:'center'}}>Rewards</Text>

      
      </View>

      <View style={styles.Tab1}>
      <Image source={require('../images/reward1.jpg')}style={styles.reward}     />
<Text style={{textAlign:'center'}}>Rewards</Text>

      
      </View>

      </View>
      
      </View>
    );
  }
}




// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }

// const TabNavigator = createStackNavigator({
    
    
//   Home: { screen: HomeScreen },
//   Settings: { screen: SettingsScreen },
  
  
    
// });

const styles = StyleSheet.create({
    Tab1: {
      marginTop:'5%',
      borderRadius: 20,
      width: 90,
      height: 100 ,
  
    
    borderWidth:1,
    borderColor: 'grey'
    },

    Facebook: { 
    marginTop:0,
     
      height: 50,
    
      paddingBottom:15,
      
    
      backgroundColor:'#FEC107',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'},

      Outline : { 
      borderRadius: 40,
     
      height: 250,
      top: 20,
      left:-3,
      borderWidth:2,
      borderColor: '#FEC107'
    },

      Outline1 : {
    
     borderRadius: 40,
     left:3,
     height: 250,
     top: 20,
  
     borderWidth:2,
     borderColor: '#FEC107'},

    Opacity:{    
     marginTop:0,
   
      height: 50,
    
      paddingBottom:15,
      
    
      backgroundColor:'#FEC107',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'},

      navigate:{
        width:60, height:30, 
         borderRadius: 10, 
         backgroundColor:'#FEC107'
      },
       
      navigateText:{
        marginLeft:'15%', 
        marginTop:'5%',
         fontSize:12,
          color:'grey'
      },
      reward:{
        width: 70,
         height: 70, 
         marginLeft:'5%',
         marginTop:'4%'
      }


 
});

// export default createAppContainer(TabNavigator);
export default HomeScreen;