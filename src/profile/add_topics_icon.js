import React from 'react';
import {Image,Platform,StyleSheet,Text,View} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

export default class AddTopicsIcon extends React.Component{
    render(){
        return (
            <View style={styles.circle}>
            {/* <Image source={}/> */}
                <Icon.Ionicons
                    name = {'md-add-circle'}
                    size = {25}
                    color = 'orange'
                    style = {styles.addTopics}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circle:{
        height: 35,
        width: 35,
        borderRadius: 17.5,
        borderColor: "red",
        borderWidth: 1
    },
    addTopics: {
        position: 'absolute',
        top: 4,
        left: 6.5
    }
});
