/**
 * Created by cikai on 5/9/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  TouchableHighlight
} from 'react-native';

class Capture extends Component {
  constructor(props) {
    super(props);
  }

  startCapture(e) {
    ToastAndroid.show('拍照', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={style.body}>
        <View style={style.video_box}>
          <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>视频区域</Text>
        </View>
        <TouchableHighlight style={style.capture_button} onPress={this.startCapture.bind(this)}>
          <Text></Text>
        </TouchableHighlight>
        <Text style={{marginTop: 15, fontSize: 15, justifyContent: 'center'}}>点击拍照</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "azure"
  },
  video_box: {
    width: 400,
    height: 240,
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  capture_button: {
    width: 100,
    height: 100,
    marginTop: 60,
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#00D7A0',
    overflow: 'hidden'
  }
});

export default Capture;

