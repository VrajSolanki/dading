import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import Ding_Icon from '../../../components/Ding_Icon'

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    };
  }
  
  onLogin() {
    const loginDetails = this.state;

    //Alert.alert('Credentials', `${username} + ${password}`);
    let url = "http://192.168.0.105:3000/user/login";
    let data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify(loginDetails),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    }
    fetch(url,data)
    .then(response => response.json())
    .then(user => { 
      console.log("user details-->",user.message)
       if(user.status == 200)      
        Alert.alert('Login successfull!!!');
        
      else 
        Alert.alert('Login Failed!!!');
     });

  }

  

  render() {
    return (
     
      <View style={styles.container}>
       <Ding_Icon style={{size:180}}/>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    
  
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FEC107',
    marginBottom: 10,
    backgroundColor: '#FEC107'
  },
});
