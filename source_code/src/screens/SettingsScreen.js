import React from 'react';
import {Image,Platform,ScrollView,StyleSheet,Text,TextInput,View} from 'react-native';
import {Icon} from 'expo';

export default class SettingsScreen extends React.Component {
  render() {
      return(
        <View style={styles.container}>
          <View style ={styles.menuBar}>
            <View style = {styles.searchbar}>
              <Icon.FontAwesome
                name={'search'}
                color = "white"
                size={30}
                style={{padding: 10}}
              />
              <TextInput
                placeholder="Search" placeholderTextColor="#fff" style={{marginLeft: 5, width: "70%"}}
              />
            </View>
            <Icon.Ionicons name={"md-menu"} size={40} color="#fff" style={{marginLeft: 20, marginTop: 10}}/>
          </View>
          <ScrollView>
          <View>
            <View style={styles.container1}>
                <View style={styles.subcontainer1}>
                  <Image source={require("../assets/images/pk.jpg")} style={styles.circle}/>
                </View>
                <View style={styles.subcontainer1}>
                    <Text style={{marginTop: 10, fontSize: 25}}>
                        Harsh Bali
                    </Text>
                    <Text style={{marginTop: 10, color: "grey"}}>
                        View your profile
                    </Text>
                </View>
            </View>

            <View style={styles.greyLine}>
            </View>

            <View style={styles.container2}>
                    <View style={styles.subcontainer2}>
                      <Icon.Ionicons
                          name = {'md-contact'}
                          size = {50}
                          color = 'red'
                      />
                      <Text style={{fontSize: 20, marginTop: 10, marginLeft: 20, color: "#666"}}>Account</Text>
                    </View>
                    <View style={styles.subcontainer2}>
                      <Icon.Ionicons
                          name = {'md-create'}
                          size = {50}
                          color = 'red'
                      />
                      <Text style={{fontSize: 20, marginTop: 10, marginLeft: 20, color: "#666"}}>Edit Profile</Text>
                    </View>
                    <View style={styles.subcontainer2}>
                      <Icon.Ionicons
                          name = {'md-lock'}
                          size = {50}
                          color = 'red'
                      />
                      <Text style={{fontSize: 20, marginTop: 10, marginLeft: 25, color: "#666"}}>Privacy</Text>
                    </View>
                    <View style={styles.subcontainer2}>
                      <Icon.Ionicons
                          name = {'md-notifications-outline'}
                          size = {50}
                          color = 'red'
                      />
                      <Text style={{fontSize: 20, marginTop: 10, marginLeft: 21, color: "#666"}}>Notifications</Text>
                    </View>
                    <View style={styles.subcontainer2}>
                      <Icon.Ionicons
                          name = {'md-information-circle-outline'}
                          size = {50}
                          color = 'red'
                      />
                      <Text style={{fontSize: 20, marginTop: 10, marginLeft: 18, color: "#666"}}>About</Text>
                    </View>
                    <View style={styles.subcontainer2}>
                      <Icon.Ionicons
                          name = {'md-contacts'}
                          size = {50}
                          color = 'red'
                      />
                      <Text style={{fontSize: 20, marginTop: 10, marginLeft: 16, color: "#666"}}>Refer a friend</Text>
                    </View>
                    <View style={styles.subcontainer2}>
                      <Icon.Ionicons
                          name = {'md-power'}
                          size = {50}
                          color = 'red'
                      />
                      <Text style={{fontSize: 20, marginTop: 10, marginLeft: 20, color: "#666"}}>Log Off</Text>
                    </View>
            </View>
          </View>
          </ScrollView>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column",

  },
  container1: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20
  },
  subcontainer1:{
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: 10
  },
  container2: {
    flexDirection: "column"
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  greyLine:{
    width: 350,
    height: 1,
    backgroundColor: "#ccc",
    marginLeft: 40
  },
  subcontainer2: {
    flexDirection: "row",
    marginLeft: 40,
    marginTop: 15,
    marginBottom: 15
  },
  menuBar:{
    backgroundColor: '#FEC107',
    padding: 5,
    paddingTop: 30,
    flexDirection: "row"
  },
  searchbar: {
    flexDirection: "row",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    marginLeft: 5
  }
});
