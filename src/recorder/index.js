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

class Recorder extends Component {
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
            source={require('../images/recorder/touch-to-connect.png')}
            style={style.image}
            onPress={() => this.props.navigation.navigate('WifiConnect')}/>
          <Text style={style.text}>点击此处连接记录仪</Text>
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
    width: 130,
    height: 109
  },
  text: {
    justifyContent: 'center',
    color: '#B4B4B4',
    fontSize: 15
  }
});

export default Recorder;
