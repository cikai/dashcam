/**
 * Created by cikai on 5/10/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  ListView,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

const filelist = [
  [{
    "name": "2017051001",
    "path": "2017051001.MOV",
    "size": 102400,
    "duration": 3600,
    "time": "2017-5-10",
    "thumbnail": "http://jsutils.b0.upaiyun.com/upload/image/poster01.png"
  }], [{
    "name": "2017051002",
    "path": "2017051002.MOV",
    "size": 102400,
    "duration": 3600,
    "time": "2017-5-10",
    "thumbnail": "http://jsutils.b0.upaiyun.com/upload/image/poster02.png"
  }], [{
    "name": "2017050901",
    "path": "2017050901.MOV",
    "size": 102400,
    "duration": 3600,
    "time": "2017-5-9",
    "thumbnail": "http://jsutils.b0.upaiyun.com/upload/image/poster01.png"
  }], [{
    "name": "2017050801",
    "path": "2017050801.MOV",
    "size": 102400,
    "duration": 3600,
    "time": "2017-5-8",
    "thumbnail": "http://jsutils.b0.upaiyun.com/upload/image/poster02.png"
  }], [{
    "name": "2017050701",
    "path": "2017050701.MOV",
    "size": 102400,
    "duration": 3600,
    "time": "2017-5-7",
    "thumbnail": "http://jsutils.b0.upaiyun.com/upload/image/poster01.png"
  }]
];

class DownloadVideo extends Component {
  state: { dataSource: any };

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
        <Text style={{fontSize: 20, color: '#FFFFFF'}}>下载视频</Text>
        <TouchableOpacity onPress={this.multiSelect} style={{alignItems: 'flex-end'}}>
          <Text style={{fontSize: 20, color: '#FFFFFF', marginRight: 20}}>选择</Text>
        </TouchableOpacity>
      </View>
    ),
    tabBarVisible: false,
    swipeEnabled: false
  };

  constructor(props: any) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(filelist),
      isVideoChecked: false,
      modalVisible: true,
      process: 80
    };
    this._renderRow = this._renderRow.bind(this);
    this._renderSectionHeader = this._renderSectionHeader.bind(this);
  }

  multiSelect() {
    ToastAndroid.show("多选", ToastAndroid.SHORT);
  }

  _changeVideoChecked() {
    this.setState({
      isVideoChecked: !this.state.isVideoChecked
    });
  }

  _renderRow(data, sectionID, rowID) {
    var checked_icon = this.state.isVideoChecked ? require('../images/download/video-checked.png') : require('../images/download/video-unchecked.png');

    return (
      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={() => this._changeVideoChecked()}>
          <Image source={require('../images/download/poster01.png')}
                 style={styles.video_item}>
            <View style={{alignItems: 'flex-end'}}>
              <Image source={checked_icon} style={styles.video_checked}/>
            </View>
            <View style={styles.video_info}>
              <Image source={require('../images/download/camera-icon.png')}
                     style={styles.video_info_camera_icon}/>
              <Text style={styles.video_info_text}>09:23</Text>
            </View>
          </Image>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this._changeVideoChecked()}>
          <Image source={require('../images/download/poster02.png')}
                 style={styles.video_item}>
            <View style={{alignItems: 'flex-end'}}>
              <Image source={checked_icon} style={styles.video_checked}/>
            </View>
            <View style={styles.video_info}>
              <Image source={require('../images/download/camera-icon.png')}
                     style={styles.video_info_camera_icon}/>
              <Text style={styles.video_info_text}>10:11</Text>
            </View>
          </Image>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this._changeVideoChecked()}>
          <Image source={require('../images/download/poster01.png')}
                 style={styles.video_item}>
            <View style={{alignItems: 'flex-end'}}>
              <Image source={checked_icon} style={styles.video_checked}/>
            </View>
            <View style={styles.video_info}>
              <Image source={require('../images/download/camera-icon.png')}
                     style={styles.video_info_camera_icon}/>
              <Text style={styles.video_info_text}>11:11</Text>
            </View>
          </Image>
        </TouchableWithoutFeedback>
        {/*
         <Text>文件名称: {data.name}</Text>
         <Text>文件路径: {data.path}</Text>
         <Text>文件大小: {data.size}</Text>
         <Text>视频长度: {data.duration}</Text>
         <Text>录像时间: {data.time}</Text>
         */}
      </View>
    );
  }

  _renderSectionHeader(data) {
    let time = data[0].time;
    let today = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
    let yesterday = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + (new Date().getDate() - 1);
    var sectionLabel = (time == today) ? "今天" : (time == yesterday) ? "昨天" : time;

    return (
      <View style={styles.section}>
        <Text>{sectionLabel}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <ListView dataSource={this.state.dataSource}
                  renderRow={this._renderRow}
                  renderSectionHeader={this._renderSectionHeader}/>
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: !this.state.modalVisible});
          }}>
          <View style={styles.modal}>
            <View style={styles.modalBody}>
              <View style={styles.modalContent}>
                <Text style={{flex: 1, fontSize: 20, textAlign: 'center'}}>正在下载... ( {this.state.process}% )</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  section: {
    height: 30,
    paddingTop: 5,
    paddingLeft: 5,
    backgroundColor: 'white'
  },
  video_item: {
    flex: 1,
    height: 130,
    margin: 1,
    justifyContent: 'space-between'
  },
  video_checked: {
    margin: 5,
    width: 20,
    height: 20
  },
  video_info: {
    height: 25,
    marginTop: 75,
    opacity: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000000'
  },
  video_info_camera_icon: {
    width: 20,
    height: 10,
    margin: 8
  },
  video_info_text: {
    fontSize: 15,
    paddingTop: 3,
    paddingRight: 2,
    color: '#FFFFFF'
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
    height: 120,
    borderRadius: 10
  },
  modalContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 280,
    height: 100,
    padding: 20
  }
});

export default DownloadVideo;
