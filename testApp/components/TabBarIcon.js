import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        color = "white"
        size={this.props.size}
        style={{ marginBottom: -3 }}
      />
    );
  }
}
