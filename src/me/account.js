/**
 * Created by cikai on 5/11/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TextInput,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

class Account extends Component {
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
        <Text style={{fontSize: 20, color: '#FFFFFF'}}>我的账号</Text>
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
      modalVisible: false
    };
  }

  render() {
    return (
      <View style={styles.body}>
        <StatusBar
          backgroundColor='#00D7A0'
          animated={true}
          barStyle='light-content'
        />
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('EditAvatar')}>
          <View style={[styles.listItem, {marginTop: 15}]}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Image source={require('../images/me/cikai.jpg')} style={styles.avatar}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text style={{color: '#AAAAAA', marginTop: 30, marginRight: 0}}>更换头像</Text>
              <Image source={require('../images/me/right-icon.png')} style={[styles.listItemIcon, {marginTop: 33}]}/>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.setState({modalVisible: true})}>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>昵称</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <Text style={{color: '#AAAAAA', margin: 15, marginRight: 0}}>宇宙无敌超级黑大帅</Text>
              <Image source={require('../images/me/right-icon.png')} style={styles.listItemIcon}/>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.separateLine}></View>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Recorder')}>
          <View style={styles.logout}>
            <Text style={styles.listItemText}>退出登录</Text>
          </View>
        </TouchableWithoutFeedback>

        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View style={styles.modal}>
            <View style={styles.modalBody}>
              <View style={styles.modalContent}>
                <Text style={{flex: 1, fontSize: 20, textAlign: 'center'}}>昵称</Text>
                <TextInput
                  style={{flex: 1, height: 50, fontSize: 18, padding: 0}}
                  placeholder=""
                />
              </View>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={{flex: 1}} onPress={() => this.setState({modalVisible: false})}>
                  <Text style={{fontSize: 18, textAlign: 'center'}}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flex: 1}}>
                  <Text style={{fontSize: 18, color: 'dodgerblue', textAlign: 'center'}}>确定</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#FAFAFA'
  },
  avatar: {
    margin: 15,
    width: 50,
    height: 50,
    borderRadius: 25
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    backgroundColor: '#FFFFFF'
  },
  listItemText: {
    color: '#787878',
    fontSize: 15,
    padding: 15
  },
  listItemIcon: {
    width: 8,
    height: 15,
    margin: 18
  },
  separateLine: {
    height: 100,
    backgroundColor: '#FAFAFA'
  },
  logout: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
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
  }
});

export default Account;
