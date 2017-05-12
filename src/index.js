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
  TabBarTop,
  TabBarBottom,
} from 'react-navigation';

// 测试
import Test from './Test';

/*
 * 记录仪相关
 */
import Recorder from './recorder/index';
import WifiConnecting from './recorder/wifi_connecting';
import WifiUnconnected from './recorder/wifi_unconnected';
import Capture from './recorder/capture';
import DownloadVideo from './recorder/download_video';

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

/*
 * 相册相关
 */
import Picture from './photo/picture';
import Video from './photo/video';
import Emergency from './photo/emergency';

const PhotoTab = TabNavigator({
  Picture: {
    screen: Picture,
    navigationOptions: {
      tabBarLabel: '照片'
    }
  },Video: {
    screen: Video,
    navigationOptions: {
      tabBarLabel: '视频'
    }
  },
  Emergency: {
    screen: Emergency,
    navigationOptions: {
      tabBarLabel: '紧急'
    }
  }
}, {
  tabBarComponent: TabBarTop,
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#FFFFFF',
    inactiveTintColor: '#FFFFFF',
    labelStyle: {
      fontSize: 20
    },
    style: {
      backgroundColor: '#00D7A0',
    },
  }
});

/*
 * '我'相关
 */
import Me from './me/index';
import About from './me/about';
import Account from './me/account';
import Advice from './me/advice';
import Help from './me/help';
import Setting from './me/setting';
import EditAvatar from './me/edit_avatar';

const MeStack = StackNavigator({
  Me: {
    screen: Me
  },
  About: {
    screen: About
  },
  Account: {
    screen: Account
  },
  Advice: {
    screen: Advice
  },
  Help: {
    screen: Help
  },
  Setting: {
    screen: Setting
  },
  EditAvatar: {
    screen: EditAvatar
  }
});

/*
 * 底部Tab导航
 */
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
    screen: PhotoTab,
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
  MeStack: {
    screen: MeStack,
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
