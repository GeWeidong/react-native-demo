/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Movie from './page/Movie';
// 路由Navigator已经在0.44版本中废弃了
import { Navigator } from 'react-native-deprecated-custom-components';

export default class Root extends Component {
 
  render() {
    return (
      <Navigator  
            initialRoute={{ name: 'Movie', component: Movie }}  
            configureScene={(route) => {  
            return Navigator.SceneConfigs.HorizontalSwipeJump;  
        }}  
        renderScene={(route, navigator) => {  
            let Component = route.component;  
            return <Component {...route.params} navigator={navigator} />  
        }}/>  
    );
  }
}

