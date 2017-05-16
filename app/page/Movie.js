/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Storage from '../util/Storage';

import TestJson from '../json/test_1.json';

export default class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  

  // 判断标题是否置灰
  judgeColor(title){
    console.log(this.historyReads);
    if(this.historyReads.includes(title)){
      return 'gray';
    }else{
      return 'orange';
    }
    
  }

  render() {

      let listView = TestJson.data.map((item,index) => {

      let genresViewTxt = item.genres.join('、');
      return (
        <CellBoxView key={index} item={item} genresViewTxt={genresViewTxt} {...this.props}/>
      )
    });


    return (
      <View style={styles.container} {...this.props}>
        {listView}
      </View>
    );
  }

}

class CellBoxView extends Component{
  constructor(props){
    super(props);
    this.state = {
      textColor:'orange',
      reads:this.props.item.reads
    };
    this.historyReads = [];
  }  

  componentDidMount() {
    this.listHistoryReads();
  }

  componentWillUnmount(){
    this.historyReads = null;
  }

  // 得到所有本地缓存列表
  listHistoryReads(){
    
      Storage.getValueForKey('user_history_read')
      .then(historyReads => {
        this.historyReads = historyReads ? historyReads : [];

        if(this.historyReads.includes(this.props.item.title)){
          this.setState({
            textColor:'gray',
          })
        }

      })

  }
  
  // 跳转到详情页
  gotoDetailPage(item){
    
    const {navigate} = this.props.navigation;
    navigate('MovieDetail',{
          title:item.title,
          likes:item.likes,
    });

    // 浏览记录
    // 没有读过的话，push进去
    if(!this.historyReads.includes(item.title)){
      this.historyReads.push(item.title);
      Storage.save('user_history_read',this.historyReads);
      this.setState({
        textColor:'gray',
        reads:this.state.reads+1
      })
    }

  }

  render(){
    let {item,genresViewTxt} = this.props;

    return (
      <TouchableOpacity style={{flex:1}} onPress={()=>this.gotoDetailPage(item)}>
          <View style={styles.cellBox}>
            <Image source={{uri:item.pic}} style={{width:100,height:140}} />
            <View style={styles.rightCell}>
              <Text style={[styles.titleView,{color:this.state.textColor}]}>{item.title}</Text>
              <Text style={styles.midleView}>{`类型：${genresViewTxt}`}</Text>
              <Text style={styles.readView}>阅读数: {this.state.reads}</Text>
            </View>
          </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  cellBox:{
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginVertical: 3,
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
    shadowColor: 'gray',    // 设置阴影
    shadowOffset: {width:0.5, height: 0.5},  
    shadowOpacity: 0.4,   // 透明度
    shadowRadius: 1,
    elevation:2   //   高度，设置Z轴，可以产生立体效果
  },
  rightCell:{
    flex:1,
    paddingLeft:30,
    // alignItems:'center',
    justifyContent:'space-between'
  },
  titleView:{
    fontSize:20,
  },
  midleView:{
    // marginTop:30
  },
  readView:{
    color:'blue',
    // marginTop:30
  }
  
});

