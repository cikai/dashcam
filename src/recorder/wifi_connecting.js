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
  Modal,
  NetInfo,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { NavigationActions } from 'react-navigation'

import wifi from 'react-native-android-wifi';

const goToRecorderConnect = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Recorder'})
  ]
});

const goToCapture = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Capture'})
  ]
});

const searchRecorderWifi = new Promise(function (resolve, reject) {
  var resultSet = new Array();
  // 搜索wifi列表
  wifi.loadWifiList((wifiStringList) => {
      if (wifiStringList.length > 0) {
        let wifiArray = JSON.parse(wifiStringList);
        for (i in wifiArray) {
          let result = "";
          let ssid = wifiArray[i].SSID;
          result = ssid.match(/TP(.*?)\b/);
          if (result) {
            resultSet.push(result.input);
          }
        }
        resolve(resultSet);
      }
    },
    (error) => {
      console.log(error);
      reject(error);
    }
  );
  return resultSet;
});

class WifiConnecting extends Component {
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
                 style={{width: 15, height: 15, marginLeft: 20, marginTop: 8}}/>
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: '#FFFFFF'}}>连接Wi-Fi</Text>
        <TouchableWithoutFeedback>
          <View><Text></Text></View>
        </TouchableWithoutFeedback>
      </View>
    ),
    tabBarVisible: false,
    swipeEnabled: false
  };

  constructor(props) {
    super(props);
    this.state = {
      ssid: "",
      modalVisible: false,
      password: ""
    };
  }

  componentWillMount() {
    var thisx = this;
    // wifi是否开启
    wifi.isEnabled((isEnabled) => {
      if (isEnabled) {
        searchRecorderWifi.then(function (value) {
          if (value.length > 0) {
            // case: 多个DV_热点？
            thisx.setState({ssid: value[0]});
            thisx.setModalVisible(true);
          } else {
            thisx.props.navigation.navigate('WifiUnconnected');
          }
        }, function (error) {
          thisx.props.navigation.navigate('WifiUnconnected');
        });
      } else {
        wifi.setEnabled(true);
      }
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  cancleConnectWifi() {
    this.setState({password: ""});
    this.setModalVisible(!this.state.modalVisible);
    this.props.navigation.dispatch(goToRecorderConnect);
  }

  connectWifi() {
    let ssid = this.state.ssid;
    let password = this.state.password;
    console.log("ssid: " + ssid + ", password: " + password);
    wifi.disconnect();
    wifi.findAndConnect(ssid, password, (found) => {
      if (found) {
        NetInfo.isConnected.fetch().done((isConnected) => {
          wifi.getSSID((cssid) => {
            if (cssid == ssid) {
              this.setModalVisible(!this.state.modalVisible);
              this.props.navigation.dispatch(goToCapture);
              ToastAndroid.show("记录仪连接成功！", ToastAndroid.SHORT);
            } else {
              ToastAndroid.show("密码不正确！", ToastAndroid.SHORT);
            }
          });
        });
      } else {
        this.setModalVisible(!this.state.modalVisible);
        this.props.navigation.navigate('WifiUnconnected');
      }
    });
  }

  render() {
    return (
      <View style={style.body}>
        <StatusBar
          backgroundColor='#00D7A0'
          animated={true}
          barStyle='light-content'
        />
        <Image
          source={require('../images/recorder/connecting.png')}
          style={style.image}/>
        <Text style={style.text}>正在连接记录仪，{'\n\n'}请稍候......</Text>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.")
          }}>
          <View style={style.modal}>
            <View style={style.modalBody}>
              <View style={style.modalContent}>
                <Text style={{flex: 1, fontSize: 20, textAlign: 'center'}}>连接到 {this.state.ssid}</Text>
                <View style={style.inputGroup}>
                  <TextInput
                    style={{flex: 1, height: 50, fontSize: 18, padding: 0}}
                    placeholder="请输入密码："
                    placeholderTextColor="#AAAAAA"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    onSubmitEditing={this.connectWifi.bind(this)}
                  />
                  <TouchableWithoutFeedback onPress={() => {
                    alert(this.state.password)
                  }}>
                    <Image source={require('../images/recorder/show-password.png')}
                           style={{width: 22, height: 13, paddingLeft: -20}}/>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={style.buttonGroup}>
                <TouchableOpacity style={{flex: 1}} onPress={this.cancleConnectWifi.bind(this)}>
                  <Text style={{fontSize: 18, textAlign: 'center'}}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={this.connectWifi.bind(this)}>
                  <Text style={{fontSize: 18, color: 'dodgerblue', textAlign: 'center'}}>连接</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
    textAlign: 'center',
    marginTop: 50,
    color: '#B4B4B4',
    fontSize: 15
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalBody: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    margin: 20,
    width: 300,
    height: 200,
    borderRadius: 10
  },
  modalContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 300,
    height: 150,
    padding: 20
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#AAAAAA',
    height: 50
  },
  inputGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default WifiConnecting;
