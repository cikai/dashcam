/**
 * Created by cikai on 5/11/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';

class Picture extends Component {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor='#00D7A0'
          animated={true}
          barStyle='light-content'
        />
        <Text>Picture</Text>
      </View>
    );
  }
}

export default Picture;
