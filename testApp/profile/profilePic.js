import React from 'react';
import {Image,Platform,StyleSheet,Text,View} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

export default class ProfilePic extends React.Component{
    render(){
        return (
            <View style={styles.circleContainer}>
                <Image source={require("../images/guy.jpg")} style={styles.circle}/>
                <Icon.Ionicons
                    name = {'md-camera'}
                    size = {20}
                    color = 'orange'
                    style = {styles.camera}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleContainer:{
        marginTop: 100
    },
    circle:{
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: "red",
        borderWidth: 1
    },
    camera: {
        position: 'absolute',
        top: 80,
        left: 90
    }
});