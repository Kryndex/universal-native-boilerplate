/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import HelloWorld from './js/components/HelloWorld';

export default class UniversalNativeBoilerplate extends Component {
  render() {
    return (
      <HelloWorld />
    );
  }
}

AppRegistry.registerComponent('UniversalNativeBoilerplate', () => UniversalNativeBoilerplate);