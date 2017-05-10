/**
 * Created by cikai on 5/9/17.
 */

import React, {Component} from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVideoChecked: false
    };
  }

  _changeVideoChecked() {
    this.setState({
      isVideoChecked: !this.state.isVideoChecked
    });
  }

  render() {
    var checked_icon = this.state.isVideoChecked ? require('./images/download/video-checked.png') : require('./images/download/video-unchecked.png');

    return (
      <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
          <Button style={{flex: 1}} title={'连接失败'} onPress={() => this.props.navigation.navigate('WifiUnconnected')}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
          <Button style={{flex: 1}} title={'capture'} onPress={() => this.props.navigation.navigate('Capture')}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
          <Button style={{flex: 1}} title={'下载'} onPress={() => this.props.navigation.navigate('DownloadVideo')}/>
        </View>
        <TouchableOpacity onPress={() => this._changeVideoChecked()}>
          <Image source={require('./images/download/poster01.png')}
                 style={styles.video_item}>
            <Image source={checked_icon} style={styles.video_checked}/>
          </Image>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  video_item: {
    width: 200,
    height: 200,
    margin: 1,
    alignItems: 'flex-end'
  },
  video_checked: {
    margin: 5,
    width: 20,
    height: 20
  }
});

export default Test;
