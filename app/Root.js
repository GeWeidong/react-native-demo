
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Movie from './page/Movie';
import MovieDetail from './page/MovieDetail';

import {StackNavigator} from 'react-navigation';

const gewdDemo01 = StackNavigator({
      Movie: {screen: Movie},
      MovieDetail: {screen: MovieDetail},
    },{
      initialRouteName: 'Movie', // 默认显示界面
      headerMode: 'none'
    }
);


AppRegistry.registerComponent('gewdDemo01', () => gewdDemo01);

