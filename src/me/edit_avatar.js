/**
 * Created by cikai on 5/12/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

class EditAvatar extends Component {
  static navigationOptions = {
    header: (
      <View style={{
        height: 50,
        backgroundColor: '#00D7A0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
      }}>
        <TouchableOpacity>
          <Image source={require('../images/common/back-icon.png')}
                 style={{width: 8, height: 14, marginLeft: 20, marginTop: 8}}/>
        </TouchableOpacity>
        <TouchableWithoutFeedback>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 20, color: '#FFFFFF'}}>全部内容</Text>
            <Image source={require('../images/common/down-icon.png')}
                   style={{width: 14, height: 8, marginLeft: 10, marginTop: 11}}/>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View><Text></Text></View>
        </TouchableWithoutFeedback>
      </View>
    ),
    tabBarVisible: false,
    swipeEnabled: false
  };

  render() {
    return (
      <View>
      </View>
    );
  }
}

export default EditAvatar;
