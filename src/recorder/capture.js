/**
 * Created by cikai on 5/9/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';

class Capture extends Component {
  constructor(props) {
    super(props);
  }

  startCapture(e) {
    ToastAndroid.show('拍照', ToastAndroid.SHORT);
  }

  changeRearview() {
    ToastAndroid.show('切换摄像头', ToastAndroid.SHORT);
  }

  downloadVideo() {
    ToastAndroid.show('下载视频', ToastAndroid.SHORT);
  }

  changeFullScreen() {
    ToastAndroid.show('全屏', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={style.body}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={style.video_box}>
            <Image source={require('../images/capture/sample.png')} style={{width: 360, height: 240}}>
              <View style={style.video_control}>
                <TouchableOpacity onPress={this.changeRearview.bind(this)}>
                  <Image source={require('../images/capture/rearview.png')} style={{width: 50, height: 50}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.downloadVideo.bind(this)}>
                  <Image source={require('../images/capture/download.png')}
                         style={{width: 50, height: 50, marginTop: 10}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.changeFullScreen.bind(this)}>
                  <Image source={require('../images/capture/fullscreen.png')} style={{width: 50, height: 50, marginTop: 50}}/>
                </TouchableOpacity>
              </View>
            </Image>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
          <TouchableOpacity style={style.capture_button} onPress={this.startCapture.bind(this)}>
            <Image source={require('../images/capture/capture-button.png')} style={{width: 100, height: 100}}/>
            <Text style={{color: '#AAA', fontSize: 18, justifyContent: 'center', textAlign: 'center', marginTop: 20}}>点击拍照</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#FFFFFF"
  },
  video_box: {
    flex: 1,
    height: 240,
    backgroundColor: '#AAAAAA',
    justifyContent: 'center'
  },
  capture_button: {
    flex: 1,
    justifyContent: 'center'
  },
  video_control: {
    margin: 10,
    alignItems: 'flex-end'
  }
});

export default Capture;
