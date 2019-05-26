import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
  Text,
} from 'react-native';
 
import ProgressBarAnimated from 'react-native-progress-bar-animated';
 
export default class ProgressBar extends React.Component {
 
  state = {
    progress: 20,
    progressWithOnComplete: 0,
    progressCustomized: 0,
  }
 
  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value,
    });
  }
 
  render() {
    const barWidth = Dimensions.get('screen').width - 270;
    const progressCustomStyles = {
      backgroundColor: '#fe5722', 
     
      borderColor: '#797572',
    };
 
    return (
      <View style={styles.container}>
        <View>
      
          <ProgressBarAnimated 
            {...progressCustomStyles}
            width={barWidth}
            value={this.state.progress}
            backgroundColorOnComplete="#6CC644"
          />
     
        </View>
        {/* <View style={styles.separator} /> */}
    
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 5,
    padding: 15,
  },
 
  separator: {
    marginVertical: 30,
    borderWidth: 1,
    borderColor: '#DCDCDC',
  },

});