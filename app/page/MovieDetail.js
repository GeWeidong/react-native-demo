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
// Storage 本地持久缓存
import Storage from '../util/Storage';

export default class MovieDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      liked:false,
      likesNum:this.props.navigation.state.params.likes
    }
    // 存储点赞数据
    this.historyLikes = [];

  }

  componentDidMount() {
    // 获取本地存储记录
    Storage.getValueForKey('user_like_history')
    .then(historyLikes => {
      this.historyLikes = historyLikes ? historyLikes : [];
      if(this.historyLikes.includes(this.props.navigation.state.params.title)){

        this.setState({
          liked:true
        })
        
      }
    }).catch(err => {
      console.log(err)
    })
  }

  // 点赞这篇文章
  likeArticle(title){
    if(this.state.liked){
      this.setState({
        liked:false,
        likesNum:this.state.likesNum-1
      })
      // 取消点赞
      Storage.update('user_like_history',title);

    }else{
      // 点赞
      this.historyLikes.push(title);

      Storage.save('user_like_history',this.historyLikes);

      this.setState({
        liked:true,
        likesNum:this.state.likesNum+1
      });
    }

  }

  resetValue(){
    Storage.remove('user_like_history');
    Storage.remove('user_history_read');
  }

  render() {
    let {title,likes} = this.props.navigation.state.params;
    const img_arr = [require('../img/like_gray.png'),require('../img/like_red.png')];
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={{fontSize:20,color:'#fff',position:'absolute',left:10}} onPress={()=>{this.props.navigation.goBack()}}>back</Text>
          <Text style={{fontSize:20,color:'#fff'}}>{title}</Text>
        </View>
        <View style={styles.likeView}>
          <TouchableOpacity onPress={()=>this.likeArticle(title)}>
              <Image source={this.state.liked ? img_arr[1] : img_arr[0]} style={{width:40,height:40}} />
              <Text style={{color:this.state.liked ? '#D4237A' : '#000'}}>{`点赞${(this.state.likesNum)}`}</Text>
          </TouchableOpacity>
          <Text style={{marginTop:70}} onPress={()=>this.resetValue()}>重置</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  titleView:{
    height:50,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
  },
  likeView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
  
});

