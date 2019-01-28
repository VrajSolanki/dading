import React from 'react';
import { Platform,StyleSheet,View} from 'react-native';
import { AppLoading, Asset } from 'expo';

export default class ProgressBar extends React.Component{
    render(){
        return (
            <View style={styles.progressBar}>
                <View style={styles.yes}></View>
                <View style={styles.no}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    progressBar: {
        flexDirection: "row"
    },
    yes:{
        height: 15,
        width: 112,
        backgroundColor: "red"
    },
    no:{
        height: 15,
        width: 38,
        backgroundColor: "orange"
    },
    
});