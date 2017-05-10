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


import Root from './app/Root';

export default class gewdDemo01 extends Component {
  render() {
    return (
     <Root />
    );
  }
}


AppRegistry.registerComponent('gewdDemo01', () => gewdDemo01);
