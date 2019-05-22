import React from 'react';
import {Image,Platform,ScrollView,StyleSheet,Text,TextInput,View} from 'react-native';
import {Icon, AuthSession} from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import ProfilePic from '../profile/profilePic';
import ComfortLevel from '../profile/comfort_level_icon';
import EditIcon from '../profile/edit_icon';
import AddTopicsIcon from '../profile/add_topics_icon';
import ProgressBar from '../profile/progress_bar';
import PieChartCustom from '../profile/pie_chart';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import Connections from '../components/Connections'
import Topics from '../components/Topics'


var shd1 = require('../assets/icons/asset2.png');
var shd2 = require('../assets/icons/h1.png');
var shd3 = require('../assets/icons/h3.png');

const DisableableHeaderButton = props => (
  <HeaderButton
    {...props}
    background={Touchable.Ripple('white', true)}
    IconComponent={Ionicons}
    iconSize={35}
    color="white"
  />
);

export default class ProfileScreen extends React.Component{
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#FEC107',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <HeaderButtons HeaderButtonComponent={DisableableHeaderButton}>
        <Item title="search" iconName="ios-search" onPress={() => alert('search')} disabled />
        <Item title="select" iconName="ios-navigate" onPress={() => alert('select')} />
      </HeaderButtons>
    ),
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={DisableableHeaderButton}>
          <Item title="search" iconName="ios-menu" onPress={() => alert('search')}   />
          <Item title="PROFILE" />
        </HeaderButtons>
        ),
  };
    render(){
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.container1}>
                    <View style={styles.subcontainer1}>
                        <ProfilePic/>
                        <Text style={{marginTop: 20}}>
                            Harsh Bali
                        </Text>
                        <Text style={{marginTop: 2}}>
                            Banglore, India
                        </Text>
                    </View>
                    <View style={styles.subcontainer2}>
                        <Text style={{marginTop: 45, marginLeft: 10, fontSize: 12, color: "grey"}}>
                            Work
                        </Text>
                        <TextInput style={styles.textinput} value="Supply Chain" editable={false}/>
                        <Text style={styles.text1}>
                            Education
                        </Text>
                        <TextInput style={styles.textinput} value="Mechanical(BTech)" editable={false}/>
                        <Text style={styles.text1}>
                            Industry
                        </Text>
                        <TextInput style={styles.textinput} value="E-Commerce" editable={false}/>
                        <View style={styles.subsubcontainer3}>
                            <View style={styles.iconEdit}>
                                <EditIcon/>
                                <View >
                                    <Text style={{paddingTop: -10, paddingLeft: 5}}>Edit</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.subcontainer2}>
                        <View style={styles.subsubcontainer}>
                            <ComfortLevel/>
                            <View style={{marginLeft:5}}>
                                <Text style={styles.font10grey}>Comfort Level</Text>
                                <Text style={styles.font10}>Easy</Text>
                            </View>
                        </View>
                        
                        <View style={styles.addIconTopics}  >
                            <AddTopicsIcon/>
                            <View >
                                <Text style={{paddingTop: 1, paddingLeft: 5}}>Add Topics</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.subcontainer4}>
                        <Text style={styles.font17}>Topics</Text>
                        <View style={styles.subsubcontainer4}>
                                <View style={styles.subsubsubcontainer2}>
                                    <Text>SEE ALL</Text>
                                </View>
                        </View>
                    </View>
                    <View style={styles.subcontainer5}>
                        <PieChartCustom/>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.font17}>Football</Text>
                        <Image source={shd1} style={{marginLeft: 5, marginTop: 2, height: 15, width: 13}}/>
                        {/* <Icon.FontAwesome name={"shield"} size={20} color="red" style={{marginLeft: 5, marginTop: 2}}/> */}
                        <Image source={shd2} style={{marginLeft: 5, marginTop: 2, height: 15, width: 13}}/>
                        {/* <Icon.FontAwesome name={"shield"} size={20} color="red" style={{marginLeft: 5, marginTop: 2}}/> */}
                    </View>
                    <View style={styles.subcontainer3}>
                        <View>
                            <View style={styles.subsubcontainer3}>
                                <View style={{flexDirection: "row", marginLeft: 15}}>
                                    <Image source={shd2} style={{marginLeft: 5, marginTop: 10, height: 15, width: 13}}/>
                                    {/* <Icon.FontAwesome name={"shield"} size={20} color="red" style={{marginLeft: 5, marginTop: 10}}/> */}
                                    <ProgressBar/>
                                    <Image source={shd3} style={{marginLeft: 20, marginTop: 10, height: 15, width: 13}}/>
                                    {/* <Icon.FontAwesome name={"shield"} size={20} color="red" style={{marginLeft: 20, marginTop: 10}}/> */}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View >
        <View >
              <View>
                  <View style={styles.right}>
              <Text style={styles.font17}>Top Connection      </Text>
              <Text style={styles.left}>SEE ALL</Text>
             </View>
                      <Connections />
                      <Connections />                    
                </View>
          </View>
    
          </View>

          <View>
        <Text style = {styles.font17}>
          Recommended Topics!
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Topics topicType ="football" />
          <Topics topicType ="cricket" />
          <Topics topicType ="painting" />
          <Topics topicType ="football" />
          <Topics topicType ="game" />
            </ScrollView>
      </View>
          </ScrollView>
        );     
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#c0c0c0"
    },
    container1:{
        borderWidth: 1,
        backgroundColor: "white",
        height: 300,
        borderColor: "#c0c0c0",
        flex: 1,
        flexDirection: "row"
    },
    container2:{
        borderWidth: 1,
        backgroundColor: "white",
        marginTop: 2,
        height: 350,
        borderColor: "#c0c0c0",
        padding: 10
    },
    container3:{
        borderWidth: 1,
        backgroundColor: "white",
        marginTop: 2,
        height: 200,
        borderColor: "#c0c0c0",
        padding: 10
    },
   
    subcontainer1:{
        width: 150,
        alignItems: "center",
        flexDirection: "column"
    },
    subcontainer2:{
        width: 150,
        flexDirection: "column"
    },
    subcontainer3:{
        height: 100,
        flexDirection: "row"
    },
    subcontainer4: {
        flexDirection: "row"
    },
    subcontainer5: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 20
    },
    profilePic: {
        marginTop: 100
    },
    text1:{
        marginTop: 10,
        marginLeft: 10,
        fontSize: 12,
        color: "grey"
    },
    textinput:{
        marginLeft: 10,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 1,
        width: 130
    },
    subsubcontainer:{
        marginLeft:5,
        marginTop: 80,
        flex: 1,
        flexDirection: "row"
    },
    subsubcontainer1:{
        marginLeft:5,
        marginTop: 50,
        flex: 1,
        flexDirection: "row"
    },
    subsubcontainer2:{
        flexDirection: "row",
        height: 50,
        marginTop: 30
    },
    subsubcontainer3:{
        marginTop: 50,
        marginLeft: 15
    },
    subsubcontainer4:{
        position: "absolute",
        right: 0
    },
    font10: {
        fontSize: 10,
        marginTop: 3
    },
    font17: {
        fontSize: 17
    },
    font17_2: {
        fontSize: 17,
        marginTop: 5
    },
    font10grey: {
        fontSize: 10,
        color: "grey"     
        
    },
    subsubsubcontainer1: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    subsubsubcontainer2:{
        borderWidth: 1,
        borderRadius: 2,
        borderBottomWidth: 0,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 1,
        padding: 5
    },
    greyWall:{
        width: 5,
        backgroundColor: "grey",
        marginLeft: 10,
        marginRight: 10
    },
    right: {
        flexDirection:'row',
        // marginLeft: 50,
        backgroundColor: "white",       
        padding: 10,        
        marginTop: 5,
        width: 'auto'       
      },
      left: {
        borderWidth: 1,
        borderRadius: 2,
        borderBottomWidth: 0,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 1,
        padding: 5,
        marginLeft: 175,
        fontSize: 17
      },

      iconEdit: {
        paddingLeft:50,
        flexDirection:'row',
        paddingTop: 0
      },

      addIconTopics: {
        flexDirection:'row',
        paddingRight: 10,
        // marginLeft: 50,   
        bottom: 10,  
        fontSize: 6
      },
});

