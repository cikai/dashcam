/**
 * Created by cikai on 5/8/17.
 */

import React from "react";
import {
  Image,
  StyleSheet
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';

import Recorder from './recorder/index';
import Photo from './photo/index';
import Me from './me/index';

// 记录仪相关
import WifiConnecting from './recorder/wifi_connecting';
import WifiUnconnected from './recorder/wifi_unconnected';
import Capture from './recorder/capture';
import DownloadVideo from './recorder/download_video';

// 测试
import Test from './Test';

const RecorderStack = StackNavigator({
  Recorder: {
    screen: Recorder
  },
  WifiConnecting: {
    screen: WifiConnecting
  },
  WifiUnconnected: {
    screen: WifiUnconnected
  },
  Capture: {
    screen: Capture
  },
  DownloadVideo: {
    screen: DownloadVideo
  },
});

const App = TabNavigator({
  Recorder: {
    screen: RecorderStack,
    navigationOptions: {
      tabBarLabel: '记录仪',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./images/tabs/recorder.png')}
          style={[style.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  Photo: {
    screen: Photo,
    navigationOptions: {
      tabBarLabel: '相册',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./images/tabs/photo.png')}
          style={[style.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: '我',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./images/tabs/me.png')}
          style={[style.icon, {tintColor: tintColor}]}
        />
      )
    }
  },
  Test: {
    screen: Test,
    navigationOptions: {
      tabBarLabel: '测试',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./images/tabs/me.png')}
          style={[style.icon, {tintColor: tintColor}]}
        />
      )
    }
  }
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#00D7A0',
    inactiveTintColor: '#787878',
    labelStyle: {
      fontSize: 10
    },
    style: {
      backgroundColor: '#FFFFFF',
    },
  }
});

const style = StyleSheet.create({
  icon: {
    width: 35,
    height: 35
  }
});

export default App;
