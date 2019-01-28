import React from 'react';
import {Image,Platform,StyleSheet,Text,View} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

export default class EditIcon extends React.Component{
    render(){
        return (
            <View style={styles.circle}>
            {/* <Image source={}/> */}
                <Icon.Ionicons
                    name = {'md-create'}
                    size = {25}
                    color = 'red'
                    style = {styles.createIcon}
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
    createIcon: {
        position: 'absolute',
        top: 4,
        left: 8
    }
});