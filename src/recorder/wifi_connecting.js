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
  Button,
  Modal,
  TextInput,
  TouchableHighlight
} from 'react-native';

class WifiConnecting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      password: ""
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
        <Button title={'连接失败'} onPress={() => this.props.navigation.navigate('WifiUnconnected')}/>
        <Button onPress={() => {
          this.setModalVisible(true)
        }} title={'显示'}/>
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
                <Text style={{flex: 1, fontSize: 25, textAlign: 'center'}}>连接到 "WIFI"</Text>
                <TextInput
                  style={{flex: 1, height: 50, fontSize: 20}}
                  placeholder="请输入密码："
                  onChangeText={(password) => this.setState({password})}
                />
              </View>
              <View style={style.buttonGroup}>
                <TouchableHighlight
                  style={{flex: 1}}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible)
                  }}>
                  <Text style={{fontSize: 20, textAlign: 'center'}}>取消</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{flex: 1}}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible)
                  }}>
                  <Text style={{fontSize: 20, color: 'dodgerblue', textAlign: 'center'}}>连接</Text>
                </TouchableHighlight>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 150
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
    height: 150
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#AAAAAA',
    height: 50
  }
});

export default WifiConnecting;
