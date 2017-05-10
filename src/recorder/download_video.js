/**
 * Created by cikai on 5/10/17.
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  StyleSheet,
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

  constructor(props: any) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(filelist),
      isVideoChecked: false
    };
    this._renderRow = this._renderRow.bind(this);
    this._renderSectionHeader = this._renderSectionHeader.bind(this);
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
            <Image source={checked_icon} style={styles.video_checked}/>
          </Image>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this._changeVideoChecked()}>
          <Image source={require('../images/download/poster02.png')}
                 style={styles.video_item}>
            <Image source={checked_icon} style={styles.video_checked}/>
          </Image>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this._changeVideoChecked()}>
          <Image source={require('../images/download/poster01.png')}
                 style={styles.video_item}>
            <Image source={checked_icon} style={styles.video_checked}/>
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
      <ListView dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderSectionHeader={this._renderSectionHeader}/>
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
    alignItems: 'flex-end'
  },
  video_checked: {
    margin: 5,
    width: 20,
    height: 20
  }
});

export default DownloadVideo;
