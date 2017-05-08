/**
 * Created by cikai on 5/8/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

class WifiUnconnected extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('WifiConnecting')}>
        <View style={style.body}>
          <StatusBar
            backgroundColor='#00D7A0'
            animated={true}
            barStyle='light-content'
          />
          <Image
            source={require('../images/recorder/unconnected.png')}
            style={style.image}/>
          <Text style={style.text}>未检测到记录仪，{'\n\n'}点击重试！</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  image: {
    justifyContent: 'center',
    marginTop: 150,
    width: 100,
    height: 100
  },
  text: {
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 30,
    color: '#B4B4B4',
    fontSize: 15
  }
});

export default WifiUnconnected;
