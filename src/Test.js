/**
 * Created by cikai on 5/9/17.
 */

import React, {Component} from 'react';
import {
  View,
  Button
} from 'react-native';

class Test extends Component {
  render() {
    return (
      <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
          <Button style={{flex: 1}} title={'连接失败'} onPress={() => this.props.navigation.navigate('WifiUnconnected')}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
          <Button style={{flex: 1}} title={'capture'} onPress={() => this.props.navigation.navigate('Capture')}/>
        </View>
      </View>
    );
  }
}

export default Test;
