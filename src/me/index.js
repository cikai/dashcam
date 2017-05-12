/**
 * Created by cikai on 5/8/17.
 */

import React, {Component} from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";

const SeparateLine = React.createClass({
  render() {
    return (
      <View style={styles.separateLine}></View>
    );
  }
});

class Me extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      isConnected: false
    }
  }

  render() {
    return (
      <View style={styles.body}>
        <StatusBar
          backgroundColor='#00D7A0'
          animated={true}
          barStyle='light-content'
        />
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Account')}>
            <Image source={require('../images/me/avatar.png')}
                   style={{width: 80, height: 80, borderRadius: 40}}/>
          </TouchableWithoutFeedback>
          <Text style={{fontSize: 15, color: '#FFFFFF', marginTop: 15}}>登录/注册</Text>
          <Text style={{fontSize: 15, color: '#FFFFFF'}}>账号: MX123456</Text>
        </View>
        <View style={styles.content}>
          <SeparateLine/>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Setting')}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>记录仪设置</Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={{margin: 15}}>{this.state.isConnected ? '' : '未连接'}</Text>
                <Image source={require('../images/me/right-icon.png')} style={styles.listItemIcon}/>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <SeparateLine/>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Advice')}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>意见反馈</Text>
              <Image source={require('../images/me/right-icon.png')} style={styles.listItemIcon}/>
            </View>
          </TouchableWithoutFeedback>
          <SeparateLine/>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Help')}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>帮助</Text>
              <Image source={require('../images/me/right-icon.png')} style={styles.listItemIcon}/>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('About')}>
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>关于</Text>
              <Image source={require('../images/me/right-icon.png')} style={styles.listItemIcon}/>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#FAFAFA'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00D7A0'
  },
  content: {
    flex: 2
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
    height: 10,
    backgroundColor: '#FAFAFA'
  }
});

export default Me;
